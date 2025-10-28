import React, { useEffect, useState } from 'react'
import Country from './Country'

export default function Countries() {

    const [courtries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/independent?status=true')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = (country) => {
  const exists = visitedCountries.find(c => c.cca3 === country.cca3);


  if (exists) {
    // remove from list
    const remaining = visitedCountries.filter(c => c.cca3 !== country.cca3);
    setVisitedCountries(remaining);
  } else {
    // add to list
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }
};

  return (
    <div >
        <h1 className='text-xl font-semibold'>Counrties: {courtries.length} </h1>
        <div>
          <h5>Visited Countries </h5>
          <ul>
            {
              visitedCountries.map(country=> <li key= {country.cca3} >  {  country.name.common}</li> )
            }
          </ul>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 '>
        {
            courtries.map((country, ind) =><Country key={ind} country={country} handleVisitedCountry={handleVisitedCountry} ></Country>)
        }
        </div>
    </div>
  )
}
