function renderResponse(status: 'success' | 'error', content: unknown) {
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>Authorizing...</title>
  </head>
  <body>
    <p id="message">Authorizing...</p>
    <script>
      function sendMessage(message) {
        document.getElementById('message').innerText = message;
        document.title = message;
      }

      function receiveMessage(message) {
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(content).replace(/</g, '\\u003c')}',
          message.origin
        );
        window.removeEventListener('message', receiveMessage, false);
        sendMessage('Authorized, closing...');
      }

      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    </script>
  </body>
</html>`;
}

export default async function handler(req: any, res: any) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  const code = typeof req.query.code === 'string' ? req.query.code : '';

  if (!clientId || !clientSecret) {
    res.status(500).send(renderResponse('error', 'Missing OAuth environment variables'));
    return;
  }

  if (!code) {
    res.status(400).send(renderResponse('error', 'Missing GitHub OAuth code'));
    return;
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || tokenData.error) {
      res.status(400).send(renderResponse('error', tokenData.error_description ?? tokenData.error ?? 'OAuth failed'));
      return;
    }

    res.status(200).send(renderResponse('success', { token: tokenData.access_token, provider: 'github' }));
  } catch (error) {
    res.status(500).send(renderResponse('error', error instanceof Error ? error.message : 'OAuth failed'));
  }
}
