import assert from 'node:assert/strict'
import { test } from 'node:test'

import { resolveStage, STAGE_FULL, STAGE_HOLDING } from './site-stage.mjs'

test('the exact value "full" selects the site', () => {
  assert.equal(resolveStage('full'), STAGE_FULL)
})

const otherValues = [
  undefined,
  '',
  'Full',
  'FULL',
  'full ',
  ' full',
  'true',
  '1',
  'holding',
  'site',
]

for (const value of otherValues) {
  test(`${JSON.stringify(value) ?? 'an unset value'} selects the holding page`, () => {
    assert.equal(resolveStage(value), STAGE_HOLDING)
  })
}
