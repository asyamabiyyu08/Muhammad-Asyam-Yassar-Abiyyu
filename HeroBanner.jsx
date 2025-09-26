import React from 'react';

export default function HeroBanner(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
      <aside className="md:col-span-1 hidden md:block">
        <ul className="space-y-2 text-sm">
          <li className="border p-3 rounded">Beras dan biji-bijian</li>
          <li className="border p-3 rounded">Minyak dan Bumbu Dapur</li>
          <li className="border p-3 rounded">Protein Hewani</li>
          <li className="border p-3 rounded">Sayur-sayuran</li>
          <li className="border p-3 rounded">Buah-buahan</li>
          <li className="border p-3 rounded">Minuman dan Susu</li>
        </ul>
      </aside>

      <div className="md:col-span-3">
        <div className="bg-gradient-to-r from-green-50 to-white rounded-lg p-6 flex items-center justify-between shadow-sm">
          <div>
            <h2 className="text-3xl font-bold">Up to 10% off Voucher</h2>
            <p className="mt-2 text-sm text-gray-600">Shop Now</p>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition">
              Shop Now
            </button>
          </div>
          <img src="/images/leaf.png" alt="leaf" className="w-44 h-44 object-contain" />
        </div>
      </div>
    </section>
  )
}
