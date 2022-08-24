import React from 'react'
import Formresident from '../forminput_resident/Formresident'
import "./modal.css"

function modal({ closeModal }) {
  return (
    <div className='modalBackground'>
     <div className='modalContainer'>

   <Formresident/>

     <div className='footer'>
        <button onClick={() => closeModal(false)}  id="cancelBtn" >Cancel</button>
        <button>Add</button>
     </div>

    </div>
    </div>
  )
}

export default modal