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
    <div>
        <h1>Counrties: {courtries.length} </h1>
        {
            courtries.map((country, ind) =><Country key={ind} country={country}></Country>)
        }
    </div>
  )
}
