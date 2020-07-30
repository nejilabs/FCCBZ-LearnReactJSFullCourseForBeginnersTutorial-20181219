import React from "react";

import Todo from "./todos";
import todosData from "./todosData";

class TodoApp extends React.Component{
  constructor(){
    super();
    this.state = {
      todos:todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
       return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }


  render(){
    const todoItems = this.state.todos.map(item => <Todo key={item.id} item={item} handleChange={this.handleChange}/>)
    return(
      <todo>
        <h1>Todo</h1>
        {todoItems}
      </todo>
    )
  }
}
export default TodoApp;
