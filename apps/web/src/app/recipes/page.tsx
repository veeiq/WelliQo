import React from 'react';
import { Utensils, Clock, Flame, Info } from 'lucide-react';

export default function RecipesPage() {
  const featuredRecipe = {
    title: 'Formula 1 Healthy Meal Shake',
    description:
      'A delicious, easy-to-make shake that provides an ideal balance of protein, fiber, and essential vitamins.',
    prepTime: '5 mins',
    calories: '170 kcal',
    category: 'Breakfast',
  };

  const recentRecipes = [
    { title: 'High-Protein Oatmeal', prepTime: '10 mins', category: 'Breakfast' },
    { title: 'Post-Workout Recovery Smoothie', prepTime: '5 mins', category: 'Recovery' },
    { title: 'Energy Boosting Matcha Bowl', prepTime: '15 mins', category: 'Snack' },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Coming Soon Banner */}
      <div className="bg-orange-500 text-white px-4 py-3 text-center text-sm font-medium">
        <span className="flex items-center justify-center gap-2">
          <Info className="w-4 h-4" />
          The complete recipe library is coming soon. Enjoy this preview!
        </span>
      </div>

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-3 text-orange-600 dark:text-orange-400 mb-4">
            <Utensils className="w-6 h-6" />
            <span className="font-semibold tracking-widest uppercase text-sm">
              Nutrition Kitchen
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-slate-50 mb-6 text-balance">
            Nourish your body.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed text-balance">
            Discover delicious, macro-balanced recipes designed to fuel your wellness journey.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                Featured Recipe
              </h2>
              <div className="group relative flex flex-col sm:flex-row bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="sm:w-2/5 bg-slate-200 dark:bg-slate-800 h-64 sm:h-auto flex items-center justify-center">
                  <Utensils className="w-12 h-12 text-slate-400 dark:text-slate-600" />
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-2">
                    {featuredRecipe.category}
                  </span>
                  <h3 className="text-2xl font-medium text-slate-900 dark:text-slate-100 mb-3 group-hover:text-orange-600 transition-colors">
                    {featuredRecipe.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {featuredRecipe.description}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featuredRecipe.prepTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Flame className="w-4 h-4" />
                      {featuredRecipe.calories}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                Recently Added
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recentRecipes.map((recipe, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2 block">
                      {recipe.category}
                    </span>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">
                      {recipe.title}
                    </h4>
                    <span className="flex items-center text-sm text-slate-500 gap-1.5">
                      <Clock className="w-4 h-4" />
                      {recipe.prepTime}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">
                Browse by Category
              </h3>
              <ul className="space-y-4">
                {['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Recovery Shakes', 'Vegan'].map(
                  (cat) => (
                    <li key={cat}>
                      <div className="flex items-center justify-between text-slate-600 dark:text-slate-400 cursor-default">
                        <span>{cat}</span>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
