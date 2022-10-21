import { it, expect } from 'vitest'
import { list } from '../lib/list'
import { replaceArrows } from './replaceArrows'

it('lists files from root level pages', async () => {
  const res = (await list({ path: 'tests/fixtures/root-level-pages' })).map(replaceArrows)
  expect(res).toMatchSnapshot()
})

it('lists files from src level pages', async () => {
  const res = (await list({ path: 'tests/fixtures/src-level-pages' })).map(replaceArrows)
  expect(res).toMatchSnapshot()
})
