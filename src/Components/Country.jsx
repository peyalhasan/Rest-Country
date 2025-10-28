import React, { useState } from 'react'

export default function Country({country, handleVisitedCountry}) {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisted] = useState(false);

    const handleVisited = () =>{
      setVisted(!visited)
    }

  return (
    <div className={`border-2  text-start  border-green-600 p-4 ${visited && 'bg-green-500'} `}>
        <h1 className='text-2xl font-bold' >Name: {name?.common} </h1>
        <img className='w-32' src={flags?.png} alt="" />
        <h1 className='text-2xl font-bold'  >Poputation: {population} </h1>
        <h1 className='text-2xl font-bold'  >Area: {area} </h1>
        <p className='text-2xl font-semibold'><small>Code: {cca3} </small></p>
        <button onClick={() => {
          handleVisited();
          handleVisitedCountry(country)
        }} className='btn btn-primary'>{visited? 'Visited' : 'Going'}</button>
        {visited ? 'I have Visited this Country' : 'I want to visit'}
        
    </div>
  )
}
