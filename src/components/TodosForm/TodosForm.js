import React from 'react'

export default function TodosForm() {

    
  return (
    <>
        <form className="input_block" >
            <input className="input_text" name='title' />
            <button className="input_btn">Send Task</button>
        </form>     
    </>
  )
}
