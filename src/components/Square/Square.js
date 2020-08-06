import React from "react";
import './Square.scss'
import { Star } from '../Star/Star'

export const Square = ({ starOn, content }) => {
  return (
    <div className='square'>
      {starOn ? <Star content={content} /> : <></>}
    </div>
  )
};