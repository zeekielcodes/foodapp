import React, { useEffect } from 'react'
import { useStateContext } from './StoreContext'

function Modal() {
    const {state, dispatch} = useStateContext()
    useEffect(() => {
        setTimeout(() => dispatch({type:"CLOSE_MODAL"}), 3000)
    })
  return (
    <div className="modal">
        <h4>{state.modalContent.title}</h4>
        <p>{state.modalContent.text}</p>
    </div>
  )
}

export default Modal