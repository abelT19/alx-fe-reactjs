// File: src/components/EditRecipeForm.jsx

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // local form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, { title, description });
    navigate(`/recipes/${id}`); // go back to details
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Save Changes</button>
      <button type="button" style={{ marginLeft: 8 }} onClick={() => navigate(-1)}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
