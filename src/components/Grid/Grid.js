import React from 'react';
import {Square} from "../Square/Square";
import './Grid.scss'
import { GRID_X, GRID_Y } from '../../constants'

export const Grid = ({ starLocations }) => {
  return (
    <div className='grid' >
      {Array.from(Array(GRID_X), (_,x) =>
        <div className='row' key={x}>
          {Array.from(Array(GRID_Y), (_,y) =>
            <div className='column' key={y}>
              {getSquare(x, y, starLocations)}
            </div>
          )}
        </div>
      )}
    </div>
  )
};

const getSquare = (x, y, starLocations) => {
  const intermediateArray = starLocations.filter(starLocation => { return x === starLocation.x && y === starLocation.y })
  if (intermediateArray.length === 1) {
    return (
      <Square key={[x, y]} starOn={true} content={intermediateArray[0].content} />
    )
  }
  return (
    <Square key={[x, y]} starOn={false} />
  )
}
