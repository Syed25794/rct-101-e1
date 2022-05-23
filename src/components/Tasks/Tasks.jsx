import React from "react";
import styles from "./tasks.module.css";

const Tasks = ({tasks,handleDec,handleInc,handleRem}) => {

  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {tasks.map((task)=>{
          return(
            <div key={task.id} className={styles.tasks_div}>
            <input  type="checkbox" />
            <p>{task.text}</p>
            <button onClick={()=>handleInc(task.id)}>+</button>
            {task.count}
            <button onClick={()=>handleDec(task.id)} >-</button>
            <button onClick={()=>handleRem(task.id)}>X</button>
            </div>
          )
        })}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
