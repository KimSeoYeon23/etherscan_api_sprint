import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Main.css';

function Main () {

  return (
    <div className='main'>
      <div className='btnWrapper'>
        <div>
          <Link className='balanceBtn' to='/getbalance'>Balance</Link>
        </div>
        <div>
          <Link className='transactionBtn'  to='/gettransactions'>Transactions</Link>
        </div>
        <div>
          <Link className='contractBtn' to='/getcontracts'>Contracts</Link>
        </div>
      </div>
    </div>
  );
}

export default Main;