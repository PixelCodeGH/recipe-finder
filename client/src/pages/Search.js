import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const dietaryOptions = [
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'gluten-free', label: 'Gluten Free' },
  { id: 'dairy-free', label: 'Dairy Free' },
];

const cuisineOptions = [
  { id: 'italian', label: 'Italian' },
  { id: 'mexican', label: 'Mexican' },
  { id: 'indian', label: 'Indian' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'japanese', label: 'Japanese' },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Implement API call
      const mockRecipes = [
        {
          id: 1,
          title: 'Sample Recipe',
          description: 'A delicious sample recipe',
          image: 'https://via.placeholder.com/300x200',
        }
      ];
      setRecipes(mockRecipes);
      toast.success('Recipes found!');
    } catch (error) {
      toast.error('Failed to fetch recipes');
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <h1 className="text-3xl font-bold text-gray-900">Search Recipes</h1>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mt-6 space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">
                Search recipes
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  className="input pl-10"
                  placeholder="Search by ingredients or recipe name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <MagnifyingGlassIcon
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Dietary Restrictions</label>
              <div className="mt-2 space-y-2">
                {dietaryOptions.map((option) => (
                  <label key={option.id} className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      checked={selectedDietary.includes(option.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedDietary([...selectedDietary, option.id]);
                        } else {
                          setSelectedDietary(selectedDietary.filter(id => id !== option.id));
                        }
                      }}
                    />
                    <span className="ml-2">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Cuisine Type</label>
              <select
                className="mt-2 input"
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
              >
                <option value="">All Cuisines</option>
                {cuisineOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>

        {/* Results */}
        <div className="mt-8">
          {loading ? (
            <p className="text-center text-gray-500">Loading recipes...</p>
          ) : recipes.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
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
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {recipe.description}
                    </p>
                    <div className="flex-1" />
                    <button
                      type="button"
                      className="btn btn-secondary w-full"
                    >
                      View Recipe
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No recipes found. Try adjusting your search criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 