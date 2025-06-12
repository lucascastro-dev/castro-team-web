
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/certificados",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/certificados"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 503, hash: '6040976f3d0b781a2847c1ef1948b6e7210216eb134b9dfd50189fb66456a6f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: 'ead4962ce36f77fd5e50ee3744eba209950b18620a07242719aae73a2a6ac56e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'certificados/index.html': {size: 7003, hash: '4dd67e14a2577c86d5121b83e3dfc5846e1a6ec8d976ba75bc05bcfe62046181', text: () => import('./assets-chunks/certificados_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
