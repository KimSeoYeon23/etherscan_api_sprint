import React, { useState } from 'react';
import axios from 'axios';
import '../css/GetContracts.css'
import Contracts from '../component/Contracts';

function GetContracts() {
  const [contractAddress, setContractAddress] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [abi, setAbi] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const contractAddressChange = (event) => {
    setContractAddress(event.target.value);
  }

  const apiKeyChange = (event) => {
    setApiKey(event.target.value);
  }

  const getTransaction = async () => {
    if (contractAddress === '' || apiKey === '') { 
      alert('contractAddress and apiKey is required');
    } else {
      const url = `http://localhost:8080/getContract`;
      const response = await axios.post(url, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/x-www-form-urlencoded",
          "Authorization": `Bearer ${apiKey}`
        },
        contractAddress: contractAddress,
        apiKey: apiKey
      });
      if (response.status === 200) {
        setAbi(response.data);
        setIsModal(true);
        setContractAddress('');
        setApiKey('');
      }
    }
    console.log(abi);
  }


  return (
    <div className='contract'>
      <div className='conInputWrap'>
        <div className='caInput'>
          <p>API KEY : </p>
          <input type="text" value={apiKey} onChange={apiKeyChange} />
        </div>
        <div className='caInput'>
          <p>컨트랙트 주소 :</p>
          <input type="text" value={contractAddress} onChange={contractAddressChange} />
        </div>
      </div>
      {
        isModal &&
        <Contracts abi={abi} isModal={isModal} setIsModal={setIsModal} />
      }
      <div>
        <button className='getCaBtn' onClick={getTransaction}>Get Contracts</button>
      </div>
    </div>
  )
}

export default GetContracts