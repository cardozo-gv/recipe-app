import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../activeRecipe.css';

const API_KEY= "c9d163aa81d66fb5065c88025c88539e";

class Recipe extends Component{
  state = {
    activeRecipe:[]
  }

  componentDidMount = async ()=>{
    const title = this.props.location.state.recipe;
    console.log("title " + title);
    const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    const resp = await req.json();
    this.setState({activeRecipe : resp.recipes[0]});
    console.log(this.state.activeRecipe);
  }

  render(){
    const recipe = this.state.activeRecipe
    return(
      <div className="activeRecipe">
        {this.state.activeRecipe.length !== 0 &&
          <div className="active_image">
            <img src={recipe.image_url} alt={recipe.title}/>
            <div className="active_information">
              <h3 className="box-title">{recipe.title}</h3>
              <h4 className="box-subtitle">Publisher:<span>{recipe.publisher}</span></h4>
              <p className="box-subtitle">Website:
                <span>
                  <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                </span>
              </p>

              <button className="box-button">
                  <Link to="/">
                    Go home
                  </Link>

              </button>

            </div>

          </div>
        }
      </div>

    )
  }
}


export default Recipe;
