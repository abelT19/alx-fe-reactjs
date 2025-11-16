// File: src/components/DeleteRecipeButton.jsx
useNavigate
import { useRecipeStore } from "../recipeStore";

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      if (onDeleted) onDeleted();
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;

