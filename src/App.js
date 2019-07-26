import React,{ Component } from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes';
import Header from './components/Header';
import './App.css';


const API_KEY= "c9d163aa81d66fb5065c88025c88539e";
class App extends Component {
 state = {
   recipes:[]
 }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    console.log(data);
    this.setState({recipes : data.recipes})
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes});
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }

}

export default App;
