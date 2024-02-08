import React from 'react'

const Modal = ({toggle, content}) => {
  return (
    <dialog open={toggle}>
        <p>{content}</p>
    </dialog>
  )
}

export default Modal