import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Recipes extends PureComponent {
  render () {
    return (
      <div className="inner cover">
        <h1 className="cover-heading">Рецепты.</h1>
        <p className="lead">Все рецепты.</p>
      </div>
    );
  }
}