import "./app.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import { useState } from "react";
import { nanoid } from 'nanoid'
import FilterBtn from "./components/FilterBtn";
function App(props) {
  const [data, setData] = useState(props.data);
  const [filter, setFilter] = useState("All");

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);
  
  const filterList = FILTER_NAMES.map((name) => (
    <FilterBtn key={name} name={name}  isPressed={name === filter}
    FilterClick={setFilter} />
  ));
  



  const addTodo = (name) => {
    setData((prevData) => {
      return [...prevData, { id: nanoid(), name:name, completed: false }];
    });
  };
function editTodo(id,name){
  let newTodolist=data.map((item)=>{
    if(item.id===id){
     return {...item,name}
    }
    return item;
  })
  setData(newTodolist)
}

function deleteTask(id){
  let newTodolist=data.filter((item)=>{
    if(item.id!==id){
     return item;
    }
  })
  setData(newTodolist)
}

  function changeStatus(id){
    let newTodolist=data.map((item)=>{
      if(item.id===id){
       return {...item,completed:!item.completed}
      }
      return item;
    })
    setData(newTodolist)
  }
  
  const todoList = data.filter(FILTER_MAP[filter]).map((item) => (
    <Todo
      key={item.id}
      name={item.name}
      completed={item.completed}
      id={item.id}
      changeStatus={changeStatus}
      editTodo={editTodo}
      deleteTask={deleteTask}
    />
  ));

  let nouns=data.length<=1?"task":"tasks";

  let taskCount=`${data.length} ${nouns} remaining`

  return (
    <div className="todoapp stack-large">
      <h1>Your TodoList</h1>
      <Form addTodo={addTodo} />
      <div className="filters btn-group stack-exception">
       
      {filterList}
   
      </div>
      <h2 id="list-heading">{taskCount}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todoList}
      </ul>
    </div>
  );
}

export default App;
