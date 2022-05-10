import classes from './Inputs.module.css';

const Inputs = ({addNewTask, setInputMsg, inputMsg}) => {
    return (
        <div className={classes.wrapper}>
            <form className={classes.form}>
                <textarea
                    maxLength='85'
                    className={classes.field}
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}>
                </textarea>
                <button className={classes.btn} onClick={(e) => addNewTask(e)}>New Task</button>
            </form>
        </div>
    );
}
 
export default Inputs;