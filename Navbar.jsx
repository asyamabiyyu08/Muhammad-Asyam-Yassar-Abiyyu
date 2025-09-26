import React from 'react';

export default function Navbar(){
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="text-xl font-semibold">Qonnectiq</div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#" className="hover:text-primary transition">Home</a>
          <a href="#" className="hover:text-primary transition">Category</a>
          <a href="#" className="hover:text-primary transition">About</a>
          <a href="#" className="hover:text-primary transition">Sign up</a>
        </nav>
        <div className="flex items-center gap-3">
          <input placeholder="What are you looking for?" className="hidden md:block border rounded px-3 py-1 text-sm" />
          <button className="bg-primary text-white px-3 py-1 rounded text-sm">Cart</button>
        </div>
      </div>
    </header>
  )
}
