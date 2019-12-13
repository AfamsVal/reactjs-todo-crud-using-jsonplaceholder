import React, {Component} from 'react';
import './App.css';
import Header from './component/Header';
import MainComponent from './component/MainComponent';
import About from './component/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  state = {
    todos:[]
  }

componentDidMount() {
  // setTimeout(() => {
  //   this.setState({todos: [...this.todos]})
  // }, 1000)
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
  .then(response => response.json())
  .then(json => this.setState({todos:json}))
}

isChecker(id){
  this.setState({todos:this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed = !todo.completed;
    }
    return todo;
  })
})
}

delHandler = id =>{
  // const todoItemz = this.state.todos.filter(todo =>{
  //   return todo.id !== id;
  // })
  // this.setState({todos:todoItemz})
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  method: 'DELETE'
})
.then(json =>  this.setState({todos:this.state.todos.filter(todo => todo.id !== id )}))
}
 
 


// setNewTodo = (title)=>{
// const addTodo = { title, completed:false, id:Math.random().toString() }
//   this.setState({todos:[...this.state.todos,addTodo]})
// }



setNewTodo = (title)=>{
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      completed: false,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => this.setState({todos:[json,...this.state.todos]}))
  .catch(err => console.log(err))
  }



render(){
   return (
     <Router>
    <div className="App">
      <Header/>
      <Route exact path="/" render={props =>(
        <React.Fragment>
          <MainComponent submitHandle={this.setNewTodo} btnClick={this.delHandler} addItem={this.addNewItem} isChecked={this.isChecker.bind(this)} todo={this.state.todos}/>
        </React.Fragment>
      )} />

      <Route path="/about" component={About} />
    </div> 
     </Router>

  );
}
 
}

export default App;
