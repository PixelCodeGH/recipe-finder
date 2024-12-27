import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Search Recipes',
    description: 'Find recipes based on ingredients, cuisine type, or dietary preferences.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Save Favorites',
    description: 'Save your favorite recipes to try them later.',
    icon: HeartIcon,
  },
  {
    name: 'Personalized Experience',
    description: 'Get recipe recommendations based on your preferences.',
    icon: BookmarkIcon,
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Find your next favorite recipe
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Discover delicious recipes tailored to your preferences. Search by ingredients,
                  cuisine type, or dietary restrictions.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link to="/search" className="btn btn-primary">
                    Start searching
                  </Link>
                  <Link to="/register" className="btn btn-secondary">
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to find the perfect recipe
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform makes it easy to discover, save, and organize your favorite recipes.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 