'use strict'

var fs = require('fs')
var https = require('https')
var dsv = require('d3-dsv')
var concat = require('concat-stream')
var bail = require('bail')

var endpoint =
  'https://api.github.com/repos/fnielsen/afinn/contents/afinn/data/AFINN-en-165.txt'

https.get(
  endpoint,
  {headers: {'User-Agent': 'request', Accept: 'application/vnd.github.v3.raw'}},
  onresponse
)

function onresponse(response) {
  response.pipe(concat(onconcat))
}

function onconcat(buf) {
  var data = {}
  var rows = dsv.tsvParse('key\tvalue\n' + String(buf))
  var index = -1

  while (++index < rows.length) {
    data[rows[index].key] = Number.parseInt(rows[index].value, 10)
  }

  fs.writeFile('index.json', JSON.stringify(data, null, 2) + '\n', bail)
}
