import classes from './TaskItem.module.css';

const TaskItem = ({task, deleteTask, doneTask}) => {
    return (
        <div className={task.isDone ? classes.done+ ' ' +classes.item : classes.item}>
            <p className={classes.title}>
                {task.msg}
            </p>
            <input 
                className={classes.btn+ ' ' +classes.btn_reset} 
                type="button" 
                value='V'
                onClick={() => doneTask(task.id)}/>
            <input 
                className={classes.btn+ ' ' +classes.btn_reset} 
                type="button" 
                value='X'
                onClick={() => deleteTask(task.id)}/>
        </div>
    )
}
 
export default TaskItem;