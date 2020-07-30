import React from "react";

function ContactCard (props){
  return(
    <div className="contact-card">
      <img src={props.contact.imgUrl}/>
      <h3>Name: {props.contact.name}</h3>
      <p>Description: {props.contact.description}</p>
    </div>
  );
}

export default ContactCard;
