import React, {Component} from "react";

class Conditional extends Component {
  constructor() {
    super();
    this.state = {
      isLoading:true
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading:false
      })
    }, 1500)
  }

  render() {
    return (
      <div>
        {this.state.isLoading ?
          <h1>Loading...</h1> :
          <h1>Hello World</h1>
        }
      </div>
    );
  }
}


export default Conditional;
