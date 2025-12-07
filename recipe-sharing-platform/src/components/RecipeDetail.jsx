"data.json"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Temporary mock JSON data
    const data = [
      {
        id: 1,
        title: "Spaghetti Bolognese",
        image: "/assets/spaghetti.jpg",
        ingredients: [
          "200g spaghetti",
          "100g minced beef",
          "1 onion (chopped)",
          "Tomato sauce",
          "Salt & Pepper",
        ],
        instructions: [
          "Boil spaghetti for 10–12 minutes.",
          "Cook beef until brown.",
          "Add onion and cook until soft.",
          "Mix beef with tomato sauce.",
          "Serve sauce on spaghetti.",
        ],
      },
      {
        id: 2,
        title: "Fried Rice",
        image: "/assets/friedrice.jpg",
        ingredients: [
          "2 cups cooked rice",
          "1 egg",
          "Vegetables (carrots, peas)",
          "Soy sauce",
          "Salt",
        ],
        instructions: [
          "Heat oil in a pan.",
          "Scramble the egg.",
          "Add vegetables and cook.",
          "Add rice and soy sauce.",
          "Mix well and serve.",
        ],
      },
    ];

    const selected = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selected);
  }, [id]);

  if (!recipe)
    return <p className="text-center text-gray-500 mt-20">Loading recipe...</p>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-10"
      />

      {/* Ingredients */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

