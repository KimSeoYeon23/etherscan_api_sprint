import React, { useState } from 'react';
import axios from 'axios';
import '../css/GetBalance.css'
import Balance from '../component/Balance';

function GetBalance() {
  const [address, setAddress] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [balance, setBalance] = useState('');
  const [isModal, setIsModal] = useState(false);

  const addressChange = (event) => {
    setAddress(event.target.value);
  }

  const apiKeyChange = (event) => {
    setApiKey(event.target.value);
  }
  const getBalance = async () => {
    if (address === '' || apiKey === '') { 
      alert('address and apiKey is required');
    } else {
      const url = `http://localhost:8080/getBalance`;
      const response = await axios.post(url, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/x-www-form-urlencoded",
          "Authorization": `Bearer ${apiKey}`
        },
          address: address,
          apiKey: apiKey
      });
      console.log(response);
      if (response.status === 200) {
        setBalance(response.data);
        setIsModal(true);
        setAddress('');
        setApiKey('');
      }
    }
  }


  return (
    <div className='balance'>
      <div className='balInputWrap'>
        <div className='balInput'>
          <p>지갑 주소 :</p>
          <input type="text" value={address} onChange={addressChange} />
        </div>
        <div className='balInput'>
          <p>API KEY : </p>
          <input type="text" value={apiKey} onChange={apiKeyChange} />
        </div>
      </div>
      {
        isModal && <Balance balance={balance} isModal={isModal} setIsModal={setIsModal} />
      }
      <div>
        <button className='getBtn' onClick={getBalance}>Get Balance</button>
      </div>
    </div>
  )
}

export default GetBalance