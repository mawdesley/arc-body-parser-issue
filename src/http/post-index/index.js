const bodyParser = require("@architect/functions").http.helpers.bodyParser;

exports.handler = async function http (req) {
  const body = bodyParser(req);
  const bodyType = typeof body;
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: bodyType
  }
}