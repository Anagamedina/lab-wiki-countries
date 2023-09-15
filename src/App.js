import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
  
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
  
    const fetchCountries = () => {
      fetch('https://ih-countries-api.herokuapp.com/countries')
        .then((response) => {
          if (!response.ok) { //que como es ok?
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
           setCountries(data); 
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    
    fetchCountries();
  }, []); 

  // return (
  //     <div className="App">
  //       <Routes>
  //            <Route path="/" element={<CountriesList countries={countries} />} />
  //           <Route path="/:id" element={<CountryDetails countries={countries} />} />

  //       </Routes>
  //     </div> 
  // );

   return (
    <Routes> 
            <Route path="/" element={<CountriesList countries={countries} />} />
            <Route path="/:id" element={<CountryDetails countries={countries} />} />   
    </Routes>
  );
}

export default App;

