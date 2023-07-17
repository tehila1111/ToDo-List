import './App.css';
import React, { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CopyrightIcon from '@mui/icons-material/Copyright';

function App() {
  const [list, setList] = useState([
    { text: "pay 23 shekels to the seminary", completed: false },
    { text: "order the room", completed: false },
    { text: "see tha 14,15,16,19 labs", completed: false }
  ]);

  const [addToDo, setAddToDo] = useState('');

  function remove(text) {
    const newList = list.filter((item) => item.text !== text);
    setList(newList);
  }

  function done(text) {
    const updatedList = list.map((item) => {
      if (item.text === text) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });
    setList(updatedList);
  }

  function getToDo(event) {
    setAddToDo(event.target.value);
  }

  function submitAdd() {
    const newToDo = { text: addToDo, completed: false };
    setList([...list, newToDo]);
    setAddToDo('');
  }

  return (
    <div className="App">
      <div className="list-cont">
        <div className='listTitle'>My ToDo List</div>
        <div className='add-to-do'>
          <input className='add' placeholder='add a new to do...' onChange={getToDo} />
          <button className='submit-add' onClick={submitAdd}>add</button>
        </div>

        <div className='all-list'>
          {list.map((todo, index) => (
            <div key={index} className={`to-do ${todo.completed ? 'completed' : ''}`}>
              <div className='todo-text'>{todo.text}</div>
              <div className='controll-buttons'>
                <button className='v' onClick={() => done(todo.text)}><CheckIcon /></button>
                <button className='x' onClick={() => remove(todo.text)}><CloseIcon /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default App;
