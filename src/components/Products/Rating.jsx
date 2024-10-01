import React from 'react';
import Bean from "../../assets/coffee-bean.svg";

const Rating = ({number}) => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => {
        const color = index <= number ? "#5c4d45" : "#d0b4a4"
        return   <Bean key={index} width={15} height={15} fill={color}/>
      })}
    </>
  );
};

export default Rating;