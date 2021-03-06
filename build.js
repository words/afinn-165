import fs from 'node:fs'
import https from 'node:https'
import {tsvParse} from 'd3-dsv'
import concat from 'concat-stream'
import {bail} from 'bail'

const endpoint =
  'https://api.github.com/repos/fnielsen/afinn/contents/afinn/data/AFINN-en-165.txt'

https.get(
  endpoint,
  {headers: {'User-Agent': 'request', Accept: 'application/vnd.github.v3.raw'}},
  onresponse
)

/**
 * @param {import('http').IncomingMessage} response
 */
function onresponse(response) {
  response.pipe(concat(onconcat))
}

/**
 * @param {Buffer} buf
 */
function onconcat(buf) {
  /** @type {Record<string, number>} */
  const data = {}
  const rows = tsvParse('key\tvalue\n' + String(buf))
  let index = -1

  while (++index < rows.length) {
    const {key, value} = rows[index]
    if (!key) throw new Error('Expected key in `' + rows[index] + '`')
    if (!value) throw new Error('Expected value in `' + rows[index] + '`')
    data[key] = Number.parseInt(value, 10)
  }

  fs.writeFile(
    'index.js',
    [
      '/** @type {Record<string, number>} */',
      'export const afinn165 = ' + JSON.stringify(data, null, 2),
      ''
    ].join('\n'),
    bail
  )
}
