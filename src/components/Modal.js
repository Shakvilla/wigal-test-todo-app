import React from 'react'
import {FaTimes} from 'react-icons/fa';
import ReactDom from 'react-dom'

const MODALSTYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  zIndex: 1000,
  width: '600px',
  minHeight: '300px',
}

const OVERLAY = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0, 
  bottom: 0, 
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const MODAL_TIMES ={
  positio: 'absolute',
  marginLeft: '96%',
  marginTop: '2%',
  border: 'none',
  cursor: 'pointer'

}



function Modal({open, onClose, children}) {

  if(!open) return null
  return ReactDom.createPortal(
    <>
    <div style={OVERLAY}>
    <div style={MODALSTYLES}> 
        <button onClick={onClose} style={MODAL_TIMES}> <FaTimes /> </button>
      {children}

    </div>
      </div>
    </>, 
    document.getElementById('portal')
  )
}

export default Modal
