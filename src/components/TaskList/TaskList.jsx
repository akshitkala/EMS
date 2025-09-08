import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
const TaskList = ({data}) => {
  return (
    <div className="flex flex-col gap-4">
      {data.tasks.map((taskitem,index)=>{
       if(taskitem.status=="new"){
        return <NewTask key={index} taskitem={taskitem}/>
       }
       if(taskitem.status=="active"){
        return <AcceptTask key={index} taskitem={taskitem}/>
       }
       if(taskitem.status=="completed"){
        return <CompleteTask key={index} taskitem={taskitem}/>
       }
       if(taskitem.status=="failed"){
        return <FailedTask key={index} taskitem={taskitem}/>
       }
      })}
  
</div>

  )
}

export default TaskList
