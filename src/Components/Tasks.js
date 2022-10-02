import React from 'react'
import Task from './Task';

function Tasks(props) {

  let liftTaskIdToDelete = (taskId) => {
    props.onTaskDelete(taskId)
  }

  let allTasks = props.tasksList.map(task =>
    <Task
      taskDescription={ task.description }
      onTaskDelete={ liftTaskIdToDelete }
      key={ task.key }
      taskID={ task.key }
      onDoneCheckboxClick={ props.onDoneCheckboxClick }
      isChecked={ task.isChecked }
    />
  )

  return (
    <React.Fragment>{ allTasks }</React.Fragment>
  )
}

export default Tasks
