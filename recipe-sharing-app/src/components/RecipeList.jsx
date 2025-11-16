// File: src/components/RecipeList.jsx

import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes yet...</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "1rem" }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div>
            <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>
              Edit
            </Link>
            <Link to={`/recipes/${recipe.id}`}>View</Link>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
