'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'T‑Shirt', price: 25, color: 'bg-pink-500' },
  { id: 2, name: 'Sneakers', price: 80, color: 'bg-green-500' },
  { id: 3, name: 'Backpack', price: 50, color: 'bg-blue-500' },
];

export default function StorePage() {
  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = (id: number) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCart((c) => {
      const qty = (c[id] || 0) - 1;
      const copy = { ...c };
      if (qty > 0) copy[id] = qty;
      else delete copy[id];
      return copy;
    });
  };

  const total = PRODUCTS.reduce(
    (sum, p) => sum + (cart[p.id] || 0) * p.price,
    0
  );

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="font-bold text-xl">Demo Store</h1>
          <Link href="/projects/ecommerce-storefront" className="text-sm text-indigo-400 hover:underline">
            ← Back to project
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6">Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="border border-white/5 rounded-xl p-4 flex flex-col"
            >
              <div className={`h-32 ${p.color} rounded-lg mb-4`} />
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-sm text-neutral-300 mb-4">${p.price}</p>
              <button
                onClick={() => addToCart(p.id)}
                className="mt-auto bg-indigo-500 hover:bg-indigo-400 px-4 py-2 text-sm rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-800 py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Cart</h2>
          {Object.keys(cart).length === 0 ? (
            <p className="text-neutral-400 text-sm">Your cart is empty.</p>
          ) : (
            <ul className="space-y-2">
              {PRODUCTS.filter((p) => cart[p.id]).map((p) => (
                <li key={p.id} className="flex items-center justify-between text-sm">
                  <span>
                    {p.name} × {cart[p.id]}
                  </span>
                  <div className="flex items-center gap-3">
                    <span>${(cart[p.id] * p.price).toFixed(2)}</span>
                    <button
                      onClick={() => removeFromCart(p.id)}
                      className="text-red-400 hover:text-red-300 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 font-medium">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      </section>
    </main>
  );
}

