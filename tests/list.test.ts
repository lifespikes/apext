import { it, expect } from 'vitest'
import { list } from '../lib/list'

it('lists files from root level pages', async () => {
  expect(await list({ path: 'tests/fixtures/root-level-pages' })).toMatchSnapshot()
})

it('lists files from src level pages', async () => {
  expect(await list({ path: 'tests/fixtures/src-level-pages' })).toMatchSnapshot()
})
