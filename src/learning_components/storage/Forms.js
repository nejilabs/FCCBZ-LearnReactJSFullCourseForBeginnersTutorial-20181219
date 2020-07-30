import React, {Component} from "react";
// import Storage from "./Storage"
class Forms extends Component{
  constructor(){
    super();
    this.state={
      firstName:"",
      lastName:"",
      isChecked:true,
      gender:"",
      favColor:""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const {name,value,type,checked} = event.target;
    type === "checkbox" ?
    this.setState({[name]:checked}):
    this.setState({[name]:value});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.firstName} name="firstName" placeholder="first name" onChange={this.handleChange}/>
        <input type="text" value={this.state.lastName} name="lastName" placeholder="last name" onChange={this.handleChange}/>

        <br/>
        <textarea
          value={this.state.firstName + " " + this.state.lastName}
          onChange= {this.handleChange}
        >{this.state.firstName} {this.state.lastName}
        </textarea>

        <p>
          <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleChange}/>
          Verified
        </p>

        <p>
          <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>
          Male
        </p>

        <p>
          <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>
          Female
        </p>

        <h2>You are a {this.state.gender}</h2>

        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
          >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>
        <h2>You like the color {this.state.favColor}</h2>

        <button>Submit</button>


      </form>
    )
  }
}

export default Forms;
