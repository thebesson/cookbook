import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class RecipesList extends PureComponent {
  render () {
    const { recipes } = this.props;
    return (<div className="recipes-list">{recipes.map(recipe => {
        return (
          <article className="recipes-list__item">
              <p className="recipes-list__image-placeholder"></p>
              <h2 className="recipes-list__title">{recipe.name}</h2>
          </article> 
        )
      })
    }</div>);
  }
}