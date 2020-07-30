import React from "react";

function Joke(props){
  return(
    <div>
      {/*h1 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h1>*/}
      <h1 style={{display: !props.question && "none"}}>Question: {props.question}</h1>
      <p style={{color: !props.question && "red"}}>Answer: {props.answer}</p>
      <hr/>
    </div>
  )
}

export default Joke;
