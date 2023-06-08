import React, { useState } from 'react';
import axios from 'axios';
import '../css/GetTransactions.css'
import Transactions from '../component/Transactions';

function GetTransactions() {
  const [transaction, setTransaction] = useState([]);
  const [address, setAddress] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [startBlock, setStartBlock] = useState('');
  const [endBlock, setEndBlock] = useState('');
  const [isModal, setIsModal] = useState(false);

  const addressChange = (event) => {
    setAddress(event.target.value);
  }

  const apiKeyChange = (event) => {
    setApiKey(event.target.value);
  }

  const startBlockChange = (event) => {
    setStartBlock(event.target.value);
  }

  const endBlockChange = (event) => {
    setEndBlock(event.target.value);
  }

  const getTransaction = async () => {
    if (address === '' || apiKey === '' || startBlock === '' || endBlock === '') { 
      alert('address, apiKey, startBlock, endBlock is required');
    } else {
      const url = `http://localhost:8080/getTransaction`;
      const response = await axios.post(url, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/x-www-form-urlencoded",
          "Authorization": `Bearer ${apiKey}`
        },
        address: address,
        startBlock: startBlock,
        endBlock: endBlock,
        apiKey: apiKey
      });
      if (response.status === 200) {
        setTransaction(response.data);
        setIsModal(true);
        setAddress('');
        setStartBlock('');
        setEndBlock('');
        setApiKey('');
      }
    }
  }

  return (
    <div className='tx'>
      <div className='txInputWrap'>
        <div className='txInput'>
          <p>지갑 주소 :</p>
          <input type="text" value={address} onChange={addressChange} />
        </div>
        <div className='txInput'>
          <p>API KEY : </p>
          <input type="text" value={apiKey} onChange={apiKeyChange} />
        </div>
        <div className='txInput'>
          <p>시작 블록 : </p>
          <input type="text" value={startBlock} onChange={startBlockChange} />
        </div>
        <div className='txInput'>
          <p>마지막 블록 : </p>
          <input type="text" value={endBlock} onChange={endBlockChange} />
        </div>
      </div>
      {
        isModal &&
        <Transactions transaction={transaction} isModal={isModal} setIsModal={setIsModal} />
      }
      <div>
        <button className='getTxBtn' onClick={getTransaction}>Get Transaction</button>
      </div>
    </div>
  )
}

export default GetTransactions