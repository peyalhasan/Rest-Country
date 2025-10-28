import React from 'react'

export default function Country({country}) {
    const {name, flags} = country
    console.log(flags)
  return (
    <div className='border-2 border-green-600 p-3 '>
        <h1 className='text-2xl font-bold' >Name: {name?.common} </h1>
        <img src={flags?.png} alt="" />
    </div>
  )
}
