import React from 'react';
import "./ButtonsCard.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function ButtonsContainer(props) {
  return (
    <div className='ButtonsCard'>
      <ButtonGroup size="small" aria-label="small button group">
        <Button key="hide" onClick={props.onHideClick}>{props.hideStatus ? "Show All Tasks" : "Hide All Done Tasks"}</Button>
        <Button key="delete" onClick={props.onDeleteClick}>Delete All Done Tasks</Button>
      </ButtonGroup>
    </div>
  )
}

export default ButtonsContainer
