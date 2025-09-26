import React from 'react';

export default function Footer(){
  return (
    <footer className="border-t mt-12 py-6">
      <div className="container mx-auto px-4 text-center text-sm">© {new Date().getFullYear()} Qonnectiq - Built for internship task</div>
    </footer>
  )
}
