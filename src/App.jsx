import React, { useState } from 'react';
import { AddInput } from './components/AddInput';

export const App = (props) => {
  const [addInput, setTodoText] = useState('');
  const [searchText,setSearchText] = useState('');
  const [taskList, setTaskList] = useState(["Task1","Task2","React"]);
  const newTasks = [...taskList,addInput];

  // const [inputDone, setInputDone] = useState(['']);
  // const doneTasks = [...inputDone,takeDone];

  // console.log(searchText);

  // タスク追加
  const onChangeAddInput = (e) => setTodoText(e.target.value);
  const addTask = (event) => {
    if(event.key === 'Enter') {
      console.log('add task');
      event.preventDefault()
      if(addInput === '') return;
      
      setTaskList(newTasks);
      setTodoText('');

      console.log('New task is ' + addInput); 
    }
  }

  // タスク検索
  const searchTaskInput = (e) => {
    setSearchText(() => e.target.value);
    
    console.log(searchText);

    newTasks.map((inputSearch)=> {
      if(inputSearch.startsWith(searchText) !== false) {

        console.log(inputSearch);
        console.log(searchText);

      }else {
        console.log('no here');
      }

      return searchText;
    });
   
  }

  

  // タスク削除
  const onClickDelete = (index) => {
    const deleteTask = [...taskList];
    deleteTask.splice(index,1);
    setTaskList(deleteTask);

    alert('todoを削除してもいいですか？');
  }  


  // タスク完了
  const onClickDone =(todo)=> {
    const taskDone = [...taskList];
    // console.log(todo);
    taskDone.map((todo) => {
      todo = false;
      console.log('hello'+ todo);
      return todo;
    });

    setTaskList(taskDone);

  }
  
  return (
    <>
    <h1 className="title">Todo List</h1>
    <p className="content">ADD TASK</p>
    
    <div className="wrapper">

    <AddInput 
     addTask={addTask}
     inputValue={addInput}
     onChange={onChangeAddInput}
    />
  
    <div className="input-area">
      <form id="search-form">
        <input id="search-input" type="text" placeholder="Search Keyword"  autoComplete="off"　onChange={searchTaskInput} value={searchText}  />
      </form>
    </div>

    
    <div className="task-area">
      <ul id="task-area-list">
        {taskList.map((todo,index) => {
          return (
            <li className="task-area-list" key={index} >
              <input type="text" defaultValue={todo} className={todo === false ? 'task-done' : 'task'} onClick={() => onClickDone(todo)}/>
              <i className="fa fa-trash" onClick={()=>onClickDelete(index)}></i>
            </li>
          )
        })}
      </ul>
    </div>

    <p className="link"><a href="https://nao-uru.github.io/Todo-Js/">JavaScripc Only</a></p>

  </div>

    </>
  );
};

export default App;