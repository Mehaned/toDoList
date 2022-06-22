import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';
import data from './data.json'
function App() {
  const [DoList ,setToDoList]= useState(data);

   
  const handleClick = (id) => {
    let mapped = DoList.map(task => {
      return task.id === Number(id) ? {...task , complete : !task.complete} : {...task}
  })
    setToDoList(mapped)
  }
  
  const handleFilter= () => {
    const filterd = DoList.filter(task => {
      return !task.complete;
    })
    setToDoList(filterd)
  }

    const addTask = (userInput ) => {
      let copy = [...DoList];
      copy = [...copy, { id: DoList.length + 1, task: userInput, complete: false }];
      setToDoList(copy);
    }


  return (
    <div className="App">
      <Header/>
      <ToDoList DoList ={DoList} handleClick={handleClick} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
