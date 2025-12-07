import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="bg-white rounded-xl shadow p-4 hover:scale-105 transition">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="rounded-lg w-full h-40 object-cover"
        />
        <h2 className="text-lg font-semibold mt-3">{recipe.name}</h2>
      </div>
    </Link>
  );
}
