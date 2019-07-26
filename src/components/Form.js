import React from 'react';


const Form = props =>(
  <div className="form">
    <form onSubmit={props.getRecipe}>
      <input className="form-input" type="text" name="recipeName"/>
      <button className="form-button">Search</button>
    </form>
  </div>

);

export default Form;
