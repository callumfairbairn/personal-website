import { GRID_X, GRID_Y, STARS } from './constants'

export const getStarLocations = () => {
  const previousStarLocations = []

  return Array.from(Array(STARS), () => {
    const newLocation = getNewLocation(previousStarLocations)
    previousStarLocations.push(newLocation)
    return newLocation
  })
}

const getNewLocation = (previousStarLocations) => {
  while (true) {
    let isRepeated = false
    const newStarLocation = { x: Math.floor(Math.random() * GRID_X), y: Math.floor(Math.random() * GRID_Y) }

    previousStarLocations.forEach(previousStarLocation => {
      if (previousStarLocation.x === newStarLocation.x && previousStarLocation.y === newStarLocation.y) {
        isRepeated = true
      }
    })

    if (!isRepeated) { return newStarLocation }
  }
}