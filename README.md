# Etherscan API Sprint

[Etherscan API docs - Goerli](https://docs.etherscan.io/v/goerli-etherscan/)  
하단의 server를 꼭 실행해야 React에서 계정에 대한 정보 조회 가능합니다.  

---

## Client - React.js
```bash
$ cd client
```
```bash
$ npm install or yarn install
```
```bash
$ npm start or yarn start
```
**메인 페이지**  
<p align="center">
  <img src='https://github.com/KimSeoYeon23/etherscan_api_sprint/assets/115128505/74b0a6e6-d19e-4434-b0e7-34a20ea90c82' width='80%' alt='메인 페이지' align='center' />
</p>
<br/>
<br/>

-----
### Get Balance  
<p align='center'>
  <img src='https://github.com/KimSeoYeon23/etherscan_api_sprint/assets/115128505/0a1cdc15-ec7f-409c-a76d-09cd743ed31b' width='80%' alt='Get Balacne 페이지'/>
</p>

`지갑 주소:` 메타마스크 지갑 주소 입력  
`API KEY:` Etherscan API KEY 입력
> GetBalance 버튼 클릭  
>
> 
> **결과 화면**  
> <p align='center'> <img src='https://github.com/KimSeoYeon23/etherscan_api_sprint/assets/115128505/f17faf02-366c-4e37-a7e0-8f051b4de5e8' width='80%' alt='결과 페이지' /> </p>

<br/>
<br/>

---
### Get Transactions  
<p align='center'>
  <img src='https://github.com/KimSeoYeon23/etherscan_api_sprint/assets/115128505/007399cd-1c5c-4264-a425-379464824935' width='80%' alt='Get Transactions 페이지'/>
</p>

`지갑 주소:` 메타마스크 지갑 주소 입력  
`API KEY:` Etherscan API KEY 입력  
`시작 블록:` 블록 숫자로 이루어진 블록 범위 값 `startBlock`  
`마지막 블록:` 블록 숫자로 이루어진 블록 범위 값 `endBlock`  
> Get Transactions 버튼 클릭
>
> 
> **결과 화면**
> <p align='center'> <img src='https://github.com/KimSeoYeon23/etherscan_api_sprint/assets/115128505/983f98f1-7fcd-44bb-b222-b5df00703f83' width='80%' alt='결과 페이지' /> </p>

<br/>
<br/>

---
### Get Contracts  
<p align='center'>
  <img src='https://github.com/KimSeoYeon23/etherscan_api_sprint/assets/115128505/ad32037b-08cf-4cd6-81fc-fe22f95f3668' width='80%' alt='Get Contract ABI 페이지'/>
</p>

`API KEY:` Etherscan API KEY 입력  
`컨트랙트 주소:` 배포 완료된 컨트랙트 주소 입력
> Get Contracts 버튼 클릭
>
> 
> **결과 화면**
> <p align='center'> <img src='https://github.com/KimSeoYeon23/etherscan_api_sprint/assets/115128505/2b53a5e6-5faa-49d6-bba4-6577dcb756b4' width='80%' alt='결과 페이지' /> </p>

---

<br/>
<br/>

## Server - Node.js + Express  

<br/>

```bash
$ cd server
```
```bash
$ npm install or yarn install
```

**Node.js Server Start - localhost:8080**
```bash
$ npm start or yarn start
```
