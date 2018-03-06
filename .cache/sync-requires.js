// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jaredstarin/Desktop/dev/0x/inbox/.cache/dev-404-page.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/jaredstarin/Desktop/dev/0x/inbox/.cache/json/dev-404-page.json")
}