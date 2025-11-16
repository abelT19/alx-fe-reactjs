// File: src/components/RecipeDetails.jsx

import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 8 }}>
          Edit
        </Link>

        <DeleteRecipeButton
          recipeId={id}
          onDeleted={() => {
            // after delete, navigate back to list
            navigate("/");
          }}
        />
      </div>

      <div style={{ marginTop: 16 }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
