import test from 'tape'
import {afinn165} from './index.js'

test('afinn', function (t) {
  t.equal(afinn165.positive, 2)
  t.equal(afinn165['self-deluded'], -2)
  t.equal(afinn165.damn, -2)
  t.equal(afinn165.futile, -2)

  t.end()
})
