import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import CompanyCard from '../CompanyCard/CompanyCard';

interface data {
  name: string;
  address: string;
  url: string | any;
  employees: string[];
}

function Cards() {
  const [fetchedData, setFetchedData] = useState<data[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchedData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(fetchedData);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 data-testid='header' className='h1'>Companies Information</h1>
        <Link to='/create'>
          <button
            data-testid='button'
            style={{
              backgroundColor: '#e6a819',
              width: '200px',
              borderRadius: '5px',
            }}
          >
            Add new company
          </button>
        </Link>
      </div>

      <div>
        {fetchedData.map((company, index) => (
          <CompanyCard
            key={index}
            name={company.name}
            address={company.address}
            url={company.url}
            employees={company.employees}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
