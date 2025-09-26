import React from 'react';
import products from '../data/products.json';
import ProductCard from './ProductCard';

export default function HotSales(){
  return (
    <section className="my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Hot Sales</h2>
        <button className="text-sm">View All Products</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
