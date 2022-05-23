import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({addTask}) => {

  const[value,setValue]=React.useState("");
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input value={value} onChange={(e)=>setValue(e.target.value)}  data-cy="add-task-input" type="text" placeholder="Add task.." className={styles.input_field} />
      <button onClick={()=>addTask(value)} className={styles.add_button} data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
