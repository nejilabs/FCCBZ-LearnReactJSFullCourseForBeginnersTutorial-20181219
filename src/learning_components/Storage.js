import React from "react";

import Counter from "./storage/Counter";
import Time from "./storage/Time";
import ContactCard from "./storage/ContactCard";
import Joke from "./storage/Joke";
import jokesData from "./storage/jokesData";

import productsData from "./storage/vschoolProducts";
import Products from "./storage/Products";

import TodoApp from "./storage/TodoApp";

import Conditional from "./storage/Conditional";

import Login from "./storage/Login";

import API from "./storage/API";

import Forms from "./storage/Forms";

import Forms2 from "./storage/Forms2";

function Storage (){
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer}/>);
  const productsComponents = productsData.map(product => <Products key={product.id} product={product}/> );

  return(
    <storage>
      <Time />


      <ContactCard
        contact = {{
          name:"A",
          imgUrl:"https://placekitten.com/300/200",
          description:"1"
        }}
      />

      <ContactCard
        contact = {{
          name:"B",
          imgUrl:"https://placekitten.com/300/100",
          description:"2"
        }}
      />

      {jokeComponents}
      {productsComponents}

      <Counter />

      <TodoApp/>

      <Conditional/>

      <Login/>

      <API/>

      <Forms/>

      <Forms2/>

    </storage>
  );
}

export default Storage;
