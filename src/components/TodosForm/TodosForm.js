import { useState } from "react";

export default function TodosForm({addTitle}) {
  const [title, setTitle] = useState('')

  const SubmitForm = (e) => {
    e.preventDefault();

    const newTitle = {
      title: title,
    }

    addTitle(newTitle);
  } 

  return (
    <>
      <form className="input_block" onSubmit={(e)=>{SubmitForm(e)}}>
        <input className="input_text" name='title' value={title} onInput={e => setTitle(e.target.value)} />
        <button className="input_btn">Send Task</button>
      </form>
    </>
  )
}
