import React, { useState } from 'react';
import './CompanyCard.css';

interface CompanyCardProps {
  name: string;
  address: string;
  url: string;
  employees: any[];
}

function CompanyCard({ name, address, url, employees }: CompanyCardProps) {
  const [toggleEmployeeList, setToggleEmployeeList] = useState(true);

  const handleButton = () => {
    setToggleEmployeeList(!toggleEmployeeList);
  };

  const handleCloseList = () => {
    setToggleEmployeeList(true);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          border: '1px solid black',
          width: '300px',
          flexDirection: 'column',
          marginTop: '10px',
        }}
      >
        <p style={{ fontSize: '12px' }}>
          <span style={{ fontWeight: 900 }}>Company:</span> {name}
        </p>
        <p style={{ fontSize: '12px' }}>
          <span style={{ fontWeight: 900 }}>Address:</span> {address}
        </p>
        <p style={{ fontSize: '12px' }}>
          <span style={{ fontWeight: 900 }}>Link:</span> <a href={url}>{url}</a>
        </p>

        <button onClick={handleButton} style={{ backgroundColor: '#e6a819', width: '100%', borderRadius: '5px' }}>
          View Employees
        </button>

        <div className={toggleEmployeeList ? 'hide' : 'show'}>
          <h5 className='employee_title'>Employee List</h5>
          {employees.map((worker, index) => (
            <div key={index}>
              <ul>
                <li className='employee_list'>
                  Name: {worker.name}
                  <br /> Age: {worker.age}
                </li>
              </ul>
            </div>
          ))}
          <button
            onClick={handleCloseList}
            style={{
              backgroundColor: '#e6a819',
              borderRadius: '5px',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
