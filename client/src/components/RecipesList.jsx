import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class RecipesList extends PureComponent {
  render () {
    const { recipes } = this.props;
    return (<div>{recipes.map(recipe => {
        return (
          <div>
            <h1 className="cover-heading">{recipe.name}</h1>
            <p className="lead">{recipe.description}</p>
          </div>  
        )
      })
    }</div>);
  }
}