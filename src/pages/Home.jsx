import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const servicosDestaque = [
    {
      id: 1,
      titulo: 'Banho e Tosa',
      descricao: 'Deixe seu pet limpinho, cheiroso e com visual renovado com profissionais qualificados.',
      imagem: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      titulo: 'Consulta Veterinária',
      descricao: 'Atendimento clínico dedicado para garantir a saúde e o bem-estar do seu melhor amigo.',
      imagem: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      titulo: 'Hotelzinho & Pet Care',
      descricao: 'Um espaço seguro e divertido para seu pet ficar enquanto você viaja ou trabalha.',
      imagem: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=500&q=80',
    },
  ];

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

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-slate-200">Nossos Principais Serviços</h2>
          <p className="text-blue-slate-400 mt-2">Tudo o que seu pet precisa com muito amor e segurança.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicosDestaque.map((servico) => (
            <div key={servico.id} className="bg-alice-blue-500 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-alice-blue-300">
              <img src={servico.imagem} alt={servico.titulo} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-slate-100 mb-2">{servico.titulo}</h3>
                <p className="text-blue-slate-300 text-sm">{servico.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nova Seção adicionada para o Commit 3: Chamada para Ação */}
      <section className="bg-blue-slate-200 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-slate-900">
            Pronto para dar o melhor cuidado ao seu pet?
          </h2>
          <p className="text-blue-slate-700">
            Entre em contato ou venha nos visitar hoje mesmo. Estamos ansiosos para conhecer o seu companheiro!
          </p>
          <div className="pt-2">
            <span className="inline-block bg-baltic-blue text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-baltic-blue-400 transition cursor-pointer">
              Fale Conosco
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}