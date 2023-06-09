const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const Web3 = require('web3');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

const endpoint = `https://api-goerli.etherscan.io/api?module=account`;

// 현재 잔액 조회
app.post('/getBalance', async (req, res) => {
  const { address, apiKey } = req.body;

  if (!address || !apiKey) {
    return res.status(400).send({error: 'Address and API key are required'});
  }

  try {
    const response = await axios.get(`${endpoint}&action=balance&address=${address}&tag=latest&apikey=${apiKey}`);

    if (response.data.status === '0') {
      return res.status(400).send({error: 'Bad request from Ethereum API'});
    } else {
      const balance = Web3.utils.fromWei(response.data.result, 'ether');
      console.log(balance);
      return res.status(200).send(balance);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

// 특정 계정 트랜잭션 조회
app.post('/getTransaction', async (req, res) => {
  const address = req.body.address;
  const apiKey = req.body.apiKey;
  const startBlock = req.body.startBlock;
  const endBlock = req.body.endBlock;
  console.log(address, apiKey, startBlock, endBlock);

  try {
    const response = await axios.get(`${endpoint}&action=txlist&address=${address}&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${apiKey}`);
    console.log(response.data.result);
    res.status(200).send(response.data.result);
  } catch (error) {
    console.log(error.response.data);
    return res.status(500).send({error: 'Server Error', details: error.response.data}); 
  }
});

app.post('/getContract', async (req, res) => {
  const { contractAddress, apiKey } = req.body;

  try {
    const response = await axios.get(`https://api-goerli.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`);
    let contractABI = response.data.result;
    // contractABI가 빈 문자열이 아니라면 contractABI를 보낸다.
    console.log(contractABI)
    let contractABIObj = JSON.parse(contractABI);
    console.log(contractABIObj)
    if(contractABI !== '') {
      res.status(200).send(contractABIObj);
    } else {
      // contractABI가 빈 문자열이라면 에러 메시지를 보낸다.
      res.status(400).send('Error: Contract ABI is empty');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});