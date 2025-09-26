import React from 'react';

export default function ProductCard({product}){
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition relative bg-white">
      {product.discount && <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">-{product.discount}%</span>}
      <div className="h-40 flex items-center justify-center bg-white">
        <img src={product.image} alt={product.name} className="max-h-36 object-contain" />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium h-12 overflow-hidden">{product.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <div className="text-red-600 font-bold">{product.price.toLocaleString()} IDR</div>
          {product.oldPrice && <div className="line-through text-gray-400 text-xs">{product.oldPrice.toLocaleString()} IDR</div>}
        </div>
        <div className="flex items-center justify-between mt-3">
          <button className="border rounded px-3 py-1 text-sm">Add To Cart</button>
          <div className="text-xs text-yellow-500">⭐ {product.rating}</div>
        </div>
      </div>
    </div>
  )
}
