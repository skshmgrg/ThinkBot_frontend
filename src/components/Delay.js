import React from 'react'
import { useContext } from 'react'
import { functionsContext } from '../context/context';

export const Delay = () => {
    const functions = useContext(functionsContext);
  return (
    <div
      className="absolute top-13 right-1 flex flex-col items-center p-2 bg-gray-100 rounded shadow-md"
      style={{ width: "150px" ,height:"80px",color:'black' }}
    >
        <div className='font-semibold'><h4>Delay:</h4></div>
        <div >{`${functions.timeTaken} miliseconds`}</div>
    </div>
  )
}
