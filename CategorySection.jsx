import React from 'react';
import categories from '../data/categories.json';

export default function CategorySection(){
  return (
    <section className="my-10">
      <h3 className="text-xl font-semibold mb-4">Browse By Category</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map(c => (
          <div key={c.id} className="border rounded-2xl p-6 text-center hover:shadow-lg transition">
            <div className="mb-2 text-3xl h-10 flex items-center justify-center">{c.icon}</div>
            <div className="text-sm font-medium">{c.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
