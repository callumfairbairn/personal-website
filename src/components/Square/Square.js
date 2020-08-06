import React from "react";
import './Square.scss'
import { Star } from '../Star/Star'

export const Square = ({ starOn }) => {
  return (
    <div className='square'>
      <Star />
    </div>
  )
};