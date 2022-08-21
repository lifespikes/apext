import { capitalizeFirstLetter } from '../lib/utils'
import { it, expect } from 'vitest'

it('capitalizeFirstLetter', () => {
  expect(capitalizeFirstLetter('hello world')).toEqual('Hello world')
})
