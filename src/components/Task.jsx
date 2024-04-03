

import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { RiDeleteBin2Fill } from "react-icons/ri";

const Task = ({taskName}) => {
  return ( 
      <ListGroup.Item className="task" onDoubleClick={(e)=> e.target.classList.toggle("done")}>
        <p className='task-content' onDoubleClick={(e)=> e.target.closest(".task").classList.toggle("done")}>{taskName}</p>
      <RiDeleteBin2Fill className='delete' onClick={(e) => e.target.closest(".task").remove()}/>
      </ListGroup.Item>
  )
}

export default Task;