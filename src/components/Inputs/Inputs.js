import classes from './Inputs.module.css';

const Inputs = ({addNewTask, setInputMsg, inputMsg}) => {
    return (
        <div className={classes.wrapper}>
            <form>
                <input type="text" value={inputMsg} onChange={(e) => setInputMsg(e.target.value)}/>
                <button onClick={(e) => addNewTask(e)}>New Task</button>
            </form>
        </div>
    );
}
 
export default Inputs;