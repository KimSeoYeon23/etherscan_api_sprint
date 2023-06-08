import React from 'react';
import Modal from 'react-modal';
import '../css/Contracts.css'

function Contracts({ abi, isModal, setIsModal }) {
  
  {console.log(abi)}
  return (
    <Modal isOpen={isModal} className='modal abiModal'>
      <div className='abiResult'>
        {abi && abi.map((item, index) => (
          <div className='abiWrapper' key={index}>
            <h3>Type: {item.type}</h3>
            {item.name && <p>Name: {item.name}</p>}
            {item.inputs && item.inputs.length > 0 && (
              <div>
                <h4>Inputs:</h4>
                {item.inputs.map((input, inputIndex) => (
                  <p key={inputIndex}>Name: {input.name}, Type: {input.type}</p>
                ))}
              </div>
            )}
            {item.outputs && item.outputs.length > 0 && (
              <div>
                <h4>Outputs:</h4>
                {item.outputs.map((output, outputIndex) => (
                  <p key={outputIndex}>Name: {output.name}, Type: {output.type}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='btnWrap'>
        <button className='closeBtn' onClick={() => setIsModal(false)}>닫기</button>
      </div>
    </Modal>
  );
}

export default Contracts;