import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

//import models and routes
import Recipe from './app/models/recipe';
import { getRecipes, getRecipe, postRecipe, deleteRecipe } from './app/routes/recipe';

//express server
const app = express();
const port = process.env.PORT || 8080;

//Mpmgoose DB connection
//options
const options = {
    server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
    replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}}
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cookbook', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//body parser and Morgan middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//static assets
app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API routes
app.route('/recipes')
  // create a recipes
  .post(postRecipe)
  // get all the recipes
  .get(getRecipes);
app.route('/recipes/:id')
  // get a single recipe
  .get(getRecipe)
  // delete a single recipe
  .delete(deleteRecipe);

app.route("*").get((req, res) => {
  res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);