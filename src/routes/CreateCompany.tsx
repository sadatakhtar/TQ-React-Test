import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateCompany() {
  const history = useHistory();

  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [companyEmployee, setCompanyEmployee] = useState([]);

  const handleCompanyName = (e: any) => {
    setCompanyName(e.target.value);
  };

  const handleCompanyAddress = (e: any) => {
    setCompanyAddress(e.target.value);
  };

  const handleCompanyUrl = (e: any) => {
    setCompanyUrl(e.target.value);
  };

  const handleEmployeeName = (e: any) => {
    setCompanyEmployee(e.target.value);
  };

  const data = {
    name: companyName,
    address: companyAddress,
    url: companyUrl,
    employees: [
      {
        name: companyEmployee,
        age: 20,
      },
    ],
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //do something
        console.log(data);
        history.push('/companies');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h5 style={{ textAlign: 'center' }}>Create a company</h5>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div
          style={{
            width: '300px',
            border: '1px solid black',
            height: '300px',
            padding: '10px',
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <input
              onChange={handleCompanyName}
              name='name'
              style={{ margin: '10px' }}
              type='text'
              placeholder='Company name'
            />
            <input
              onChange={handleCompanyAddress}
              name='address'
              style={{ margin: '10px' }}
              type='text'
              placeholder='Address'
            />
            <input
              onChange={handleCompanyUrl}
              name='url'
              style={{ margin: '10px' }}
              type='text'
              placeholder='Website URL'
            />

            <input
              onChange={handleEmployeeName}
              name='employees'
              style={{ margin: '10px' }}
              type='text'
              placeholder='Employee name'
            />

            <button
              style={{
                backgroundColor: '#e6a819',
                width: '100%',
                borderRadius: '5px',
                marginTop: '10px',
              }}
              type='submit'
            >
              Create company
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCompany;
