import React, {useState} from 'react';
import '../App.css';

const AddTodos = props =>{

  const [newTodo,setTodo] = useState('');

  const addItem = (e) =>{
      setTodo(e.target.value)
  }


  const doSubmit = (e) =>{
    e.preventDefault();
      if(newTodo){
     props.submitHandle(newTodo);
     setTodo('')
     }else{
         return false;
     }
  }
  
    return(
        <form onSubmit={doSubmit} className="col-sm-10 offset-sm-1 offset-md-1 col-md-10 offset-lg-1 col-lg-10">
        <div className="form-group">
          <h4>Create Todos:</h4>
          <input type="text" autoComplete="off" onChange={addItem} value={newTodo} className="form-control" name="enteredTodo" placeholder="Enter new todo..."/>
        </div>
        <input  type="submit" className="btn btn-success btn-block" value="ADD TODO"/>
        <hr></hr>
      </form> 
    )
}

export default AddTodos;