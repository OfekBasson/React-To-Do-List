import './App.css';
import React, { useState } from 'react';
import ButtonsCard from './Components/ButtonsCard';
import TasksCard from './Components/TasksCard';


function App() {
  const [tasksList, setTasksList] = useState([]);
  const [hideAllDoneTasksValue, setHideAllDoneTasksValue] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

  const addTaskHandler = (taskDescription) => {
    if (taskDescription === "") setIsValidInput(false);
    else {
      setIsValidInput(true);
      let newTask = {
        description: taskDescription,
        isChecked: false,
        key: Math.random(),
      }
      setTasksList((prevList) => [newTask, ...prevList]);
    }
  }

  const deleteTaskHandler = (taskIdToDelete) => {
    let newTasksList = tasksList.map(item => item);
    for (let taskIndex in newTasksList) {
      if (newTasksList[taskIndex].key === taskIdToDelete) newTasksList.splice(taskIndex, 1)
    }
    setTasksList(newTasksList);
  }

  const hideAllDoneTasksButtonClickHandler = () => {
    setHideAllDoneTasksValue((prevValueOfHideStatus) => !prevValueOfHideStatus);
  }

  const deleteAllDoneTasksClickHandler = () => {
    setTasksList(prevList => prevList.filter(task => !task.isChecked));
  }


  const ChangeCheckedStatueOfSpecificTaskHandler = (checkStatusOfTask, taskIDToChangeIsChecked) => {
    setTasksList(prevTasksList => {
      let newTasksList = prevTasksList.map(x => x);
      for (let task of newTasksList) {
        if (task.key === taskIDToChangeIsChecked) task.isChecked = checkStatusOfTask;
      }
      return newTasksList;
    });
  }

  return (
    <React.Fragment>
      <ButtonsCard
        onHideClick={hideAllDoneTasksButtonClickHandler}
        onDeleteClick={deleteAllDoneTasksClickHandler}
        hideStatus={hideAllDoneTasksValue}
      />
      <TasksCard
        onTaskAdd={addTaskHandler}
        onTaskDelete={deleteTaskHandler}
        onDoneCheckboxClick={ChangeCheckedStatueOfSpecificTaskHandler}
        tasksList={hideAllDoneTasksValue ? tasksList.filter(task => !task.isChecked) : tasksList}
        inputValidation={isValidInput}
      />

    </React.Fragment>
  );
}

export default App;
