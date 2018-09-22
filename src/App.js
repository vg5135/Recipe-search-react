import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import Recipes from './Components/Recipes';
//import axios from 'axios';



class App extends Component {

  state = {
    recipes: [
      {
        title: 'hello1',
        publisher_url: 'www.www.com',
        recipe_id: '07090'
      },
      {
        title: 'hello2',
        publisher_url: 'www.www.com',
        recipe_id: '07098'
      },
      {
        title: 'hello13',
        publisher_url: 'www.www.com',
        recipe_id: '07097'
      }
    ],
    
    datas: [], 
  }

  
  // getRecipe = (e) => {
  // const recipeName = e.target.elements.recipeName.value;
  // const API_KEY = '33c272d013a28f26ad2265a8ffe82906';
  // e.preventDefault();
  //     if(recipeName){
  //         axios.get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=`)
  //         .then(res => {
  //             this.setState({ recipes: res.data.recipes });
  //             console.log(this.state.recipes)
  //         })
  //         .catch(function (error) {
  //             console.log(error);
  //         })
  //     }else{
  //       alert('Enter valid search here...');
  //     }
  //   }    
    // deleteHandler = (recipe, i) => {
    //   const oldrecipes = [...this.state.recipes];
    //   console.log(oldrecipes);
    //   const newRecipes = oldrecipes.slice(0, -1);
    //   console.log(newRecipes);
    //   //const updateRecipe = recipe
    //   this.setState({
    //     recipes: newRecipes
    //   })
    //   console.log(this.setState)
    //   }

      deleteHandler = (recipe, i) => {
        // this.setState((prevState)=>({
        //   recipes: prevState.recipes.filter((r) => r.title !== recipe.title)          
        // }))
        
        
         let recipesNew = [...this.state.recipes];
         recipesNew.splice(i, 1);
         
        this.setState({recipes:recipesNew })
        console.log(recipesNew)
       
      }
onchangeHandler = (e) =>{
  e.preventDefault();
  let datas = [...this.state.datas];
  let name = this.refs.name.value;

  let data = {
    name
  }
  
  datas.push(data);
  
 
  this.setState({datas});
  
console.log(datas);
  // this.setState({newobject:e.ref.name.value})
  // console.log(this.state.newobject)
}

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <div className='row' style={{margin: '0'}}>
        <div className='col-sm-6' style={{padding: '0'}}>
        <h3 className="App-title-main">f<span className='smalltext'>ood</span><span>2</span>f<span className='smalltext'>ork</span></h3>
        </div>
        <div className='col-sm-6' style={{padding: '0'}}>
        <Form getRecipe={this.getRecipe}/>
        </div>
        </div>
        
         
          
          
        </header>
          
          <Recipes foods={this.state.recipes} delete={this.deleteHandler}/>
         <form refs='myForm'>
           <input type='text' ref='name' />
           <button onClick={(e)=>this.onchangeHandler(e)} value='Submit'>Submit</button>
         </form>
      {
        this.state.datas.map((data, i)=>
        <li key={i}>{data.name}</li>
        )
      }
      </div>
    );
  }
}

export default App;
