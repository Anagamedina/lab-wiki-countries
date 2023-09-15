import React from 'react';
import { useParams } from 'react-router-dom';
import { Link    } from "react-router-dom";

import CountriesList from './CountriesList';

const CountryDetails = ({ countries }) => {
  let { id } = useParams();
  const alpha3Code = id;
  const country = countries.find((item) => item.alpha3Code === alpha3Code);

  console.log(country);

  if (!country) {
    return <div>No se han proporcionado datos del país.</div>;
  }

  const { name, capital, area, borders } = country;

  return (
    <div className="row">
      <div className="col-5">
        <CountriesList countries={countries} />
      </div> 

      <div className="col-7">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt={`${country.name.official} Flag`}
        />

        <h1>{name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area.toLocaleString()} km<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.map((border) => (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryDetails;
