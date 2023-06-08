import React, { useState } from 'react';
import '../css/GetContracts.css'

function GetContracts() {
  const [showBalance, setShowBalance] = useState(false);
  const [address, setAddress] = useState('');
  const [apiKey, setApiKey] = useState('');

  const addressChange = (event) => {
    setAddress(event.target.value);
  }

  const apiKeyChange = (event) => {
    setApiKey(event.target.value);
  }

  const handleButtonClick = async (e) => {
    console.log(e.target.className)
    if(e.target.className === 'balanceBtn') {
      setShowBalance(true);
    } 
  }


  return (
    <>
      <div className='caInput'>
        <p>API KEY : </p>
        <input type="text" value={apiKey} onChange={apiKeyChange} />
      </div>
      <div className='caInput'>
        <p>컨트랙트 주소 :</p>
        <input type="text" value={address} onChange={addressChange} />
      </div>
      <div>
        <button className='contractBtn' onClick={handleButtonClick}>Get Balance</button>
      </div>
    </>
  )
}

export default GetContracts