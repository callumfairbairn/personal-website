import React from 'react';
import {Square} from "../Square/Square";
import './Grid.scss'
import { GRID_X, GRID_Y } from '../../constants'

export const Grid = ({ starLocations }) => {
  console.log(starLocations)
  return (
    <div className='grid' >
      {Array.from(Array(GRID_X), (_,x) =>
        <div className='row' key={x}>
          {Array.from(Array(GRID_Y), (_,y) =>
            <div className='column' key={y}>
              {console.log(starLocations.filter(starLocation => { return x === starLocation.x && y === starLocation.y }).length > 0, x, y)}
              <Square key={[x, y]} starOn={starLocations.filter(starLocation => { return x === starLocation.x && y === starLocation.y }).length > 0} />
            </div>
          )}
        </div>
      )}
    </div>
  )
};