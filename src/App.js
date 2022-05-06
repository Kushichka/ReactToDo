import { useState } from 'react';
import './App.css';
import Inputs from './components/Inputs/Inputs';
import TaskItem from './components/TaskItem/TaskItem';


function App() {

  const [data, setData] = useState({
    tasks: [
      {id: 1, msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae', isDone: false},
      {id: 2, msg: 'Morbi non augue eu ligula', isDone: false},
      {id: 3, msg: 'Duis purus leo, porttitor in eleifend in, molestie a turpis. Nulla facilisi. Cras eu.', isDone: true}
    ],
    maxId: 4
  });
  const [inputMsg, setInputMsg] = useState('');

  const addNewTask = (e) => {
    e.preventDefault();

    if(inputMsg.length > 85 || inputMsg.length < 1) {
      return false;
    }

    const newTask = {
      id: data.maxId,
      msg: inputMsg
    }

    setData({
      tasks: [...data.tasks, newTask],
      maxId: data.maxId + 1
    });
    setInputMsg('');
  }

  const deleteTask = (id) => {
    const index = data.tasks.findIndex(i => i.id === id);
    const before = data.tasks.slice(0, index);
    const after = data.tasks.slice(index+1);

    setData({
      tasks: [...before, ...after],
      maxId: data.maxId
    })
  }

  const doneTask = id => {
    const index = data.tasks.findIndex(i => i.id === id);
    const oldData = data.tasks;
    oldData[index].isDone = !oldData[index].isDone;

    setData({
      tasks: [...oldData],
      maxId: data.maxId
    })
  }

  const elements = data.tasks.map(i => {
    return (
      <TaskItem
        key={i.id}
        task={i}
        doneTask={doneTask}
        deleteTask={deleteTask} />
    )
  });

  return (
    <div className="app">
      {elements}
      <Inputs
        addNewTask={addNewTask}
        setInputMsg={setInputMsg}
        inputMsg={inputMsg}/>
    </div>
  );
}

export default App;
