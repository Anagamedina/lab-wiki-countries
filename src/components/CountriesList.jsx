import React from 'react';
import { Link    } from "react-router-dom";

const CountriesList = ({ countries }) => {
  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {countries.map((country) => (
          <Link to={`/${country.alpha3Code}`}>
            <div className="card" style={{ width: '250px' }}>
              <img
                style={{ width: '100px' }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.official} Flag`}
              />

              <div class="card-body">
                {country.name.official} - {country.alpha3Code}
              </div>
            </div>
          </Link >
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;

//{country.name} - {country.alpha3Code}=> mostramos el nombre del país y su código alfa-3. Estos valores se obtienen directamente del objeto country.
