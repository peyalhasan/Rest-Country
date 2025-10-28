import React, { useEffect, useState } from 'react'
import Country from './Country'

export default function Countries() {

    const [courtries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/independent?status=true')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = (country) => {
      const exists = visitedCountries.find(c => c.cca3 === country.cca3);
      if (exists) {
        // remove from list
        const remaining = visitedCountries.   filter(c => c.cca3 !== country.cca3);
          setVisitedCountries(remaining);
      } 
      else {
        // add to list
        const newVisitedCountries = [...visitedCountries, country];
         setVisitedCountries(newVisitedCountries);
      }
    };

    const handleVisitedFlags = flag =>{
      // console.log(flag)
      const exist = visitedFlags.find(f=>f === flag);
      if(exist){
        // Remove from list
        const remaining = visitedFlags.filter(fl => fl !== flag);
        setVisitedFlags(remaining)
      }
      else{
        // add to list 
        const newVisitedCountriesFlags = [...visitedFlags, flag];
        
        setVisitedFlags(newVisitedCountriesFlags)
      }
      console.log(visitedFlags)
    }

  return (
    <div >
        <h1 className='text-xl font-semibold'>Counrties: {courtries.length} </h1>
        <div>
          <div className='mb-3 border-2 border-purple-700 p-3 bg-neutral-400'>
          <h5 className='text-2xl font-bold text-start'>Visited Countries: </h5>
          <ul className='flex items-center gap-2 '>
            {
              visitedCountries.map((country, idx)=> <li className='text-xl font-semibold flex items-center gap-1' key= {country.cca3} > {idx + 1}.  {  country.name.common}</li> )
            }
          </ul>
          </div>
          <ul className=' mb-3 border-2 border-purple-700 p-3 bg-stone-300'>
              <h5 className='text-2xl font-bold text-start'>Visited Countries Flags:  </h5>
            <div className='flex flex-wrap items-center gap-2'>
              {
                visitedFlags.map((flag, idx)=><li className='flex items-center gap-1' key={idx}> <span className='text-2xl font-semibold'>{idx + 1}</span> -  <img className='w-15' src={flag} alt="" /> </li>)
              }
            </div>
          </ul>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 '>
        {
            courtries.map((country, ind) =><Country key={ind} country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}  ></Country>)
        }
        </div>
    </div>
  )
}
