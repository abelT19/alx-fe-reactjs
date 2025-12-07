import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert ingredients into array
    const ingredientList = ingredients
      .split(",")
      .map(item => item.trim())
      .filter(item => item !== "");

    // Validation
    if (!title || !ingredients || !steps) {
      setErrors("All fields are required.");
      return;
    }

    if (ingredientList.length < 2) {
      setErrors("Please include at least two ingredients.");
      return;
    }

    setErrors("");

    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps
    };

    console.log("Recipe Submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    alert("Recipe added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          ➕ Add New Recipe
        </h2>

        {errors && (
          <p className="mb-4 text-red-600 text-sm text-center">
            {errors}
          </p>
        )}

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients
          </label>
          <textarea
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients (comma separated)"
          />
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the preparation steps"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md
                     hover:bg-blue-700 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
