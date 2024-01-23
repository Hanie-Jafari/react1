import { useState } from "react";

export default function Todo(props) {
  let [editing,setEditing]=useState(false);

  let[newText,setNewtext]=useState(props.name);

  function submitHandler(e) {
    e.preventDefault()
    props.editTodo(props.id,newText);
    setEditing(false)
    }
    function changeHandler(e){
      props.changeStatus(e.target.id);
    }
  
  const editingTemplate = (
    <form className="stack-small" onSubmit={submitHandler}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input id={props.id} className="todo-text" type="text" value={newText} onChange={e=>setNewtext(e.target.value)} />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={()=>{setEditing(false)}}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={changeHandler}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={()=>{setEditing(true)}}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
  

  return (
    <li className="todo stack-small">
     {editing?editingTemplate:viewTemplate}
    </li>
  );
}
