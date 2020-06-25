import React from 'react'
import { headerLinks } from './headerLinks'

export const Header = () => {
  return (
    <div className='header'>
      {headerLinks.map(link => {
        return (
          <div className='header-link' key={link.text}>
            {link.text}
          </div>
        )
      })}
    </div>
  )
}
