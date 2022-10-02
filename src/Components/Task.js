import React from 'react';
import './Task.css';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';


function Task(props) {
    const checkButtonChangeHandler = (event) => {
        props.onDoneCheckboxClick(event.target.checked, props.taskID);
    }

    const deleteTaskHandler = () => {
        props.onTaskDelete(props.taskID);
    }

    return (
        <div className='task-container'>
            <Checkbox onChange={checkButtonChangeHandler} checked={ props.isChecked } />
            <h3 className='task-description'>{props.taskDescription}</h3>
            <IconButton aria-label="delete" size="small" onClick={deleteTaskHandler}>
                <Delete fontSize="small" />
            </IconButton>
        </div>
    )
}

export default Task
