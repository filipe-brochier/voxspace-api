import { it, expect } from 'vitest'
import { Slug } from './slug'

it('should be able to create a slug from test', () => {
  const slug = Slug.createFromString('Example Title')

  expect(slug.value).toEqual('example-title')
})
