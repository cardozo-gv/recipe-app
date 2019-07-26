import React from 'react';
import {Link} from 'react-router-dom';



const Recipes = props => (
  <div className="grid">
    <div className="contenedor">
      { props.recipes.map((recipe) => {
        return (
          <div key={recipe.title} className="box">
            <img src={recipe.image_url} alt={recipe.title}/>
            <div className="box-text">
              <h5 className="box-title">
                {recipe.title.length < 20 ? `${recipe.title}` :
                `${recipe.title.substring(0,25)}...`}
              </h5>
              <p className="box-subtitle">Publisher: <span>
                {recipe.publisher}
              </span></p>
            </div>
            <button className="box-button">
              <Link to={{
                pathname:`/recipe/${recipe.recipe_id}`,
                state: {recipe:recipe.title}
              }}>View recipe</Link>
            </button>
          </div>
        )
      })}
    </div>
  </div>

)


export default Recipes;
