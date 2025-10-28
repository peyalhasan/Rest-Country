import React, { useEffect, useState } from 'react'
import Country from './Country'

export default function Countries() {

    const [courtries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/independent?status=true')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

  return (
    <div >
        <h1 className='text-xl font-semibold'>Counrties: {courtries.length} </h1>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 '>
        {
            courtries.map((country, ind) =><Country key={ind} country={country}></Country>)
        }
        </div>
    </div>
  )
}
