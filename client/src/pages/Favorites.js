import { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch favorites
    setLoading(false);
  }, []);

  const handleRemoveFavorite = async (recipeId) => {
    try {
      // TODO: Implement API call to remove favorite
      setFavorites(favorites.filter(recipe => recipe.id !== recipeId));
    } catch (error) {
      console.error('Failed to remove favorite:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500">Loading your favorites...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <h1 className="text-3xl font-bold text-gray-900">Your Favorite Recipes</h1>
        
        {favorites.length === 0 ? (
          <div className="mt-8 text-center">
            <HeartIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No favorites yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              Start adding some recipes to your favorites!
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((recipe) => (
              <div
                key={recipe.id}
                className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-h-3 aspect-w-4 bg-gray-200">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-full w-full object-cover object-center"
                  />
                  <button
                    onClick={() => handleRemoveFavorite(recipe.id)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-sm hover:bg-gray-100"
                  >
                    <HeartIcon className="h-5 w-5 text-red-500" />
                  </button>
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {recipe.title}
                  </h3>
                  {recipe.cuisine && (
                    <p className="text-sm text-gray-500">
                      {recipe.cuisine} Cuisine
                    </p>
                  )}
                  <div className="flex-1" />
                  <button
                    type="button"
                    className="btn btn-secondary w-full"
                    onClick={() => window.open(recipe.sourceUrl, '_blank')}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 