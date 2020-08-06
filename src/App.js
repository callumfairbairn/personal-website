import React from 'react'

import './App.scss'
import { Grid } from './components/Grid/Grid'
import { getStarLocations } from './getStarLocations'

const App = () => {

  const starLocations = getStarLocations([<div className='star-content' />])

  return (
    <div className='App'>
      <Grid starLocations={starLocations} />
    </div>
  )
}

export default App
