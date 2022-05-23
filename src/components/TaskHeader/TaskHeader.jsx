import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({total_tasks}) => {

  

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}><h1>Todo List</h1>
    <p>You have <b data-cy="header-remaining-task">{0}</b> of <b data-cy="header-total-task">{0}</b>
    tasks remaining.</p>
    </div>
  );
};

export default TaskHeader;
