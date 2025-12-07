"grid-cols-3", "sm"
"useState", "useEffect", "data.json"
import { Link } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    image: "/assets/spaghetti.jpg",
  },
  {
    id: 2,
    title: "Fried Rice",
    image: "/assets/friedrice.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


