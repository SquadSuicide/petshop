import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-pale-sky-900 flex flex-col justify-between">
      <section className="bg-baltic-blue text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              O Paraíso do seu Pet em um só lugar! 🐾
            </h1>
            <p className="text-lg text-baltic-blue-800">
              Cuidado, carinho e dedicação que o seu melhor amigo merece. Conheça nossos serviços e produtos exclusivos.
            </p>
            <div className="pt-4 flex justify-center md:justify-start gap-4">
              <Link
                to="/produtos"
                className="bg-alice-blue text-baltic-blue font-semibold px-6 py-3 rounded-lg shadow hover:bg-alice-blue-600 transition"
              >
                Ver Produtos
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80"
              alt="Cão feliz"
              className="rounded-2xl shadow-xl w-full object-cover h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}