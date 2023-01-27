import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const SearchBar = ({setQuery, suggestion}) => {

    const [inputtext, setInputtext] = useState("");

    const handleChange = (e)=>{
        setInputtext(e.target.value);
    }

    useEffect(()=>{
        setQuery(inputtext)
    }, [inputtext, setQuery])

  return (
    <div>
        <div>
            <input type="text" value={inputtext} onChange={handleChange} placeholder='Search' />
        </div>
        <div>
          {suggestion.length>0 ? suggestion.map((item, i)=> (
                <h5 key={item.i}>{item}</h5>
            )) : <h3>Not found</h3>}
        </div>
    </div>
  )
}
