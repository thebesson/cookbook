import React, { Component } from 'react';
import {RecipesList} from '../components';

export default class RecipesContainer extends Component {
    constructor (props) {
        super(props);
        this.state = { recipes: [] }
    }
    componentDidMount () {
        this.getGames();
    }

    getGames () {
        fetch('http://localhost:8080/recipes', {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => this.setState({ recipes: data }));
    }

    render () {
        const { recipes } = this.state;
        return (
            <RecipesList recipes={recipes}
            ></RecipesList>
        )
    }
}