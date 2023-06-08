import React  from 'react';
import Modal from 'react-modal';
import '../css/Transaction.css'

function Transactions({ transaction, isModal, setIsModal }) {

  return (
    <Modal className='modal txModal' isOpen={isModal}>
      <div className='txResult'>
        {
          transaction.map((item, index) => {
            return (
              <div className='txWrapper' key={index}>
                <p><strong>BlockNumber</strong>: {item.blockNumber}</p>
                <p><strong>TimeStamp</strong>: {item.timeStamp}</p>
                <p><strong>Hash</strong>: {item.hash}</p>
                <p><strong>Nonce</strong>: {item.nonce}</p>
                <p><strong>TransactionIndex</strong>: {item.transactionIndex}</p>
                <p><strong>From</strong>: {item.from}</p>
                <p><strong>To</strong>: {item.to}</p>
                <p><strong>Value</strong>: {item.value}</p>
                <p><strong>Gas</strong>: {item.gas}</p>
                <p><strong>GasPrice</strong>: {item.gasPrice}</p>
                <p><strong>isError</strong>: {item.isError}</p>
                <p><strong>TxReceipt_Status</strong>: {item.txreceipt_status}</p>
                <p>
                  <strong>Input</strong>: {
                    item.input < 50
                    ? item.input
                    : item.input.slice(0, 35) + '...'
                  }
                </p>
                <p><strong>ContractAddress</strong>: {item.contractAddress}</p>
                <p><strong>CumulativeGasUsed</strong>: {item.cumulativeGasUsed}</p>
                <p><strong>GasUsed</strong>: {item.gasUsed}</p>
                <p><strong>Confirmations</strong>: {item.confirmations}</p>
                <p><strong>MethodId</strong>: {item.methodId}</p>
                <p><strong>FunctionName</strong>: {item.functionName.length == 0 ? '' : item.functionName}</p>
              </div>
            )
          })
        }
      </div>
      <div className='btnWrap'>
        <button className='closeBtn' onClick={() => setIsModal(false)}>닫기</button>
      </div>
    </Modal>
  );
}

export default Transactions;