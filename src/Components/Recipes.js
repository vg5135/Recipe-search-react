import React from 'react';

const Recipes = (props) => {
    return (
        <div className='container-fluid'>
       {
           props.foods.map((recipe, i)=>(
            <div key={i} className='grid-container'>            
            <div className='title'><h5>{recipe.title.substring(0,20)}</h5></div>
            <div className='img-container'>
                <img src={recipe.image_url} alt={recipe.title}/>
            </div>
            <div className='publisher-data'>
                <p style={{margin: '0px'}}>{recipe.publisher}:</p>
                <span>{recipe.publisher_url}</span>
                <span>{recipe.recipe_id}</span>
            </div>
            <button className='glow' onClick={()=>props.delete(recipe, i)}>Show Recipe</button>
          </div>
           ))
         }

         
         
        </div>
    );
}

export default Recipes;