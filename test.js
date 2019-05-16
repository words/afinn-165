'use strict'

/* Dependencies. */
var test = require('tape')
var afinn = require('.')

/* Tests. */
test('afinn', function(t) {
  t.equal(afinn.positive, 2)
  t.equal(afinn['self-deluded'], -2)
  t.equal(afinn.damn, -2)
  t.equal(afinn.futile, -2)

  t.end()
})
