import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
    {
        name: String,
        postDate: {type: Date, default: Date.now},
        description: String,
        picture: String,
        type: String
    }
);

export default mongoose.model('Recipe', recipeSchema);