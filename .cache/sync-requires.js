const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/helena/Documents/Docs for life/personal-web/Main-Page/secret-garden/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/helena/Documents/Docs for life/personal-web/Main-Page/secret-garden/src/pages/404.js"))),
  "component---src-pages-about-me-js": hot(preferDefault(require("/Users/helena/Documents/Docs for life/personal-web/Main-Page/secret-garden/src/pages/about-me.js"))),
  "component---src-pages-carpool-show-js": hot(preferDefault(require("/Users/helena/Documents/Docs for life/personal-web/Main-Page/secret-garden/src/pages/carpoolShow.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/helena/Documents/Docs for life/personal-web/Main-Page/secret-garden/src/pages/index.js"))),
  "component---src-pages-my-works-js": hot(preferDefault(require("/Users/helena/Documents/Docs for life/personal-web/Main-Page/secret-garden/src/pages/my-works.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/helena/Documents/Docs for life/personal-web/Main-Page/secret-garden/src/pages/using-typescript.tsx")))
}

