import React from 'react';
import {Square} from "../Square/Square";
import './Grid.scss'

export const Grid = () => {
  return (
    <div className='grid' >
      {Array.from(Array(20), (_,y) =>
        <div className='row' key={y}>
          {Array.from(Array(20), (_,x) =>
            <div className='column' key={x}>
              <Square key={[x, y]} startOn={true} />
            </div>
          )}
        </div>
      )}
    </div>
  )
};