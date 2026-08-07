function getBaseUrl(req: any) {
  const host = req.headers['x-forwarded-host'] ?? req.headers.host;
  const proto = req.headers['x-forwarded-proto'] ?? 'https';
  return `${proto}://${host}`;
}

function randomState() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

export default function handler(req: any, res: any) {
  const clientId = process.env.OAUTH_CLIENT_ID;

  if (!clientId) {
    res.status(500).send('Missing OAUTH_CLIENT_ID');
    return;
  }

  const scope = typeof req.query.scope === 'string' ? req.query.scope : 'repo,user';
  const state = typeof req.query.state === 'string' ? req.query.state : randomState();
  const redirectUri = `${getBaseUrl(req)}/api/callback`;
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope,
    state
  });

  res.writeHead(302, {
    Location: `https://github.com/login/oauth/authorize?${params.toString()}`
  });
  res.end();
}
