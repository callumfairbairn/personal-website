import { render } from '@testing-library/react'
import React from 'react'
import { Header } from './Header'
import { headerLinks } from './headerLinks'

describe('Header', () => {
  it('should render links', () => {
    shouldRenderLinks(<Header />)
  })
})

const shouldRenderLinks = (component) => {
  const { getByText } = render(component)
  headerLinks.forEach(link => { expect(getByText(link.text)) })
}

export const headerTests = [
  shouldRenderLinks
]
