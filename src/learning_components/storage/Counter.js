import React from "react";

class Counter extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState =>{
      return{
        count:prevState.count+1
      }
    })
  }

  render(){
    return(
      <counter>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </counter>
    )
  }
}
export default Counter;
