import React, { useState } from 'react';
import Modal from 'react-modal';


function Balance({ balance, isModal, setIsModal }) {

  return (
    <Modal isOpen={isModal} className='modal'>
      <p className='result'><strong>Balance</strong>: <span>{balance} ETH</span></p>
      <div>
        <button className='closeBtn' onClick={() => setIsModal(false)}>닫기</button>
      </div>
    </Modal>
  );
}

export default Balance;