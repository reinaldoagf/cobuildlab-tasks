import React from 'react'
import Modal from 'react-modal';
const ModalComponent = ({modalIsOpen,afterCloseModal,closeModal, children}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
        },
      };
      Modal.setAppElement('#root');
  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
        <button onClick={() => afterCloseModal()}>Agregar</button>
      </Modal>
  )
}

export default ModalComponent
