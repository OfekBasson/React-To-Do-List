import React from 'react';
import "./TasksCard.css";
import AddNewTask from "./AddNewTask";
import Tasks from "./Tasks"

function TasksCard(props) {
  return (
    <div className='TasksCard'>
      <AddNewTask
        onTaskAdd={props.onTaskAdd}
        inputValidation={props.inputValidation}
      />
      <Tasks
        tasksList={props.tasksList}
        onTaskDelete={props.onTaskDelete}
        hideAllDoneTasksValue={props.hideAllDoneTasksValue}
        onDoneCheckboxClick={props.onDoneCheckboxClick}
      />
    </div>
  )
}

export default TasksCard
