import Recipe from '../models/recipe';

//get all recipes
const getRecipes = (req, res) => {
    Recipe.find(null, null, { sort: { postDate : 1 } }, (err, recipes) => {
        if (err) {
            res.send(err);
        }
        res.json(recipes);
    });
}

//get a recipe, sorted by ID
const getRecipe = (req, res) => {
    const { id } = req.params;
    Recipe.findById(id, (err, recipe) => {
        if (err) {
            res.send(err);
        }
        res.json(recipe);
    });
}

//add a recipe
const postRecipe = (req, res) => {
    let recipe = Object.assign(new Recipe(), req.body);
    Recipe.save(err => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'recipe added'});
    });
}

//delete a game by ID
const deleteRecipe = (req, res) => {
    Recipe.remove(
        {_id: req.params.id}, 
        err => {
            if (err) {
                res.send(err);
            }
            res.json({message: 'recipe deleted'})
        }
    );
}

export { getRecipes, getRecipe, postRecipe, deleteRecipe };