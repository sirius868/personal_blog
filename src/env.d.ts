/// <reference path="../.astro/types.d.ts" />

declare const process: {
  env: Record<string, string | undefined>;
};

declare module 'decap-cms-locales/dist/esm/zh_Hans/index.js' {
  const phrases: import('decap-cms-core').CmsLocalePhrases;
  export default phrases;
}
