import React from 'react';
import { ShoppingBag, Info, ShieldCheck, Leaf, Zap } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      title: 'Formula 1 Nutritional Shake Mix',
      icon: <ShoppingBag className="w-6 h-6" />,
      goal: 'Core Nutrition',
    },
    {
      title: 'Herbal Aloe Concentrate',
      icon: <Leaf className="w-6 h-6" />,
      goal: 'Digestive Health',
    },
    {
      title: 'Liftoff Energy Supplement',
      icon: <Zap className="w-6 h-6" />,
      goal: 'Energy & Focus',
    },
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Coming Soon Banner */}
      <div className="bg-purple-600 text-white px-4 py-3 text-center text-sm font-medium">
        <span className="flex items-center justify-center gap-2">
          <Info className="w-4 h-4" />
          The complete product catalog is coming soon.
        </span>
      </div>

      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 mb-4">
            <ShoppingBag className="w-6 h-6" />
            <span className="font-semibold tracking-widest uppercase text-sm">
              Wellness Products
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-slate-50 mb-6 text-balance">
            Fuel your daily goals.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed text-balance">
            Science-backed nutrition and targeted supplements to support your personalized wellness
            journey.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                Product Philosophy
              </h2>
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex items-start gap-6">
                <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-2xl text-purple-600 dark:text-purple-400 shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100 mb-3">
                    Science & Quality
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Every product is formulated by nutrition scientists and tested rigorously to
                    ensure the highest standards of quality, safety, and efficacy. We believe in
                    providing your body with exactly what it needs, when it needs it.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                Explore by Category
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map((product, idx) => (
                  <div
                    key={idx}
                    className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-200 transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-500 group-hover:text-purple-600 transition-colors">
                        {product.icon}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                        {product.goal}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                      {product.title}
                    </h4>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">
                Wellness Goals
              </h3>
              <ul className="space-y-4">
                {[
                  'Weight Management',
                  'Energy & Fitness',
                  'Healthy Aging',
                  'Digestive Health',
                  'Immune Support',
                ].map((goal) => (
                  <li key={goal}>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 cursor-default py-1">
                      <span>{goal}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
