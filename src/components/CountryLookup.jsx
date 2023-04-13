"use client";
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const CountryLookup = () =>{
    const [country , setCountry] = useState("France");
    useEffect(() => {
        fetch(`https://app.ipgeolocation.io/json/?key=${process.env.IP_API_KEY}`)
        .then((res) => res.json())
        .then((data) => setCountry(data.country));
    })
    return <div>{country}</div>
}
export default CountryLookup;