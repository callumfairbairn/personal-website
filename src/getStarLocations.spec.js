import { getStarLocations } from './getStarLocations'
import { GRID_X, GRID_Y, STARS } from './constants'

describe('getStarLocations', () => {
  it('should return an array containing the same number of elements as STARS', () => {
    expect(getStarLocations().length).toEqual(STARS)
  })

  it('should contain coordinates of stars', () => {
    const starLocations = getStarLocations()

    starLocations.forEach(starLocation => {
      expect(starLocation.x).toBeDefined()
      expect(starLocation.y).toBeDefined()
    })
  })

  it('should contain coordinates within GRID_X and GRID_Y', () => {
    const starLocations = getStarLocations()

    starLocations.forEach(starLocation => {
      expect( 0 <= starLocation.x && starLocation.x <= GRID_X).toBeTruthy()
      expect(0 <= starLocation.y && starLocation.y <= GRID_Y).toBeTruthy()
    })
  })

  it('should not contain repeated coordinates', () => {
    const starLocations = getStarLocations()
    const previousStarLocations = []
    console.log(starLocations)

    starLocations.forEach(starLocation => {
      previousStarLocations.forEach(previousStarLocation => {
        if (starLocation.x === previousStarLocation.x && starLocation.y === previousStarLocation.y) {
          console.log(starLocation, previousStarLocation)
        }
        expect(starLocation.x !== previousStarLocation.x || starLocation.y !== previousStarLocation.y ).toBeTruthy()
      })

      previousStarLocations.push(starLocation)
    })
  })
})