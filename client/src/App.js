import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from'react-router-dom';

import Main from './Pages/Main';
import GetBalance from './Pages/GetBalance';
import GetTransactions from './Pages/GetTransactions';
import GetContracts from './Pages/GetContracts';

function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <main>
            {
              window.location.pathname !== '/'
              ? <Link to='/' className='backBtn'>Back</Link>
              : <></>
            }
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/getbalance' element={<GetBalance />} />
              <Route path='/gettransactions' element={<GetTransactions />} />
              <Route path='/getcontracts' element={<GetContracts />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;