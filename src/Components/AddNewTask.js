import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import "./AddNewTask.css"


function AddNewTask(props) {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onTaskAdd(inputRef.current.value);
    inputRef.current.value = "";
  }
  console.log(props.inputValidation);

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={inputRef} className={!props.inputValidation ? "invalid" : ""}/>
      <Button type="submit">Add New Task</Button>
    </form>
  )
}

export default AddNewTask
