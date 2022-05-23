import React from "react";
import styles from "./taskApp.module.css";
import TaskHeaders from './TaskHeader/TaskHeader';
import AddTask from './AddTask/AddTask';
import Tasks from './Tasks/Tasks';
import data from './../data/tasks.json';
import { v4 as uuidv4 } from 'uuid';

const TaskApp = () => {
  const [datas,setData]=React.useState(data);
  const addTask=(value)=>{
    const payload={
      id:uuidv4(),
      text:value,
      count:1,
      done:true
    }
    setData([...datas,payload]);
  }
  const handleDec=(id)=>{
    console.log(id);
    datas.forEach(elem=>{
      if( elem.id === id ){
        if(elem.count===0){
          elem.count=0;
        }else{
          elem.count--;
        }
      }
    })
    setData([...datas]);
  }
  const handleRem=(id)=>{
    datas.forEach(elem=>{
      if( elem.id === id ){
        elem.done=false;
      }
    })
    setData([...datas]);
  }
  const handleInc=(id)=>{
    datas.forEach(elem=>{
      if( elem.id === id ){
        elem.count++;
      }
    })
    setData([...datas]);
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeaders total_task={[...datas]} />
      <AddTask addTask={addTask}/>
      <Tasks tasks={[...datas]} handleDec={handleDec} handleInc={handleInc} handleRem={handleRem}/>
    </div>
  );
};

export default TaskApp;
