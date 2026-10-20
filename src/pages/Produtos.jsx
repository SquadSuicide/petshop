import React from 'react'
import Card from '../components/Card'

const listaProdutos = [
  {
    id: 1,
    nome: 'Ração Premium Cães Adultos 15kg',
    preco: 'R$ 189,90',
    imagem:
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    nome: 'Arranhador Torre para Gatos com Rede',
    preco: 'R$ 249,90',
    imagem:
      'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    nome: 'Cama Nuvem Macia Lavável (Tam. G)',
    preco: 'R$ 159,90',
    imagem:
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    nome: 'Kit Brinquedos Mordedores Interativos',
    preco: 'R$ 54,90',
    imagem: 'https://images.unsplash.com/photo-1589924749359-9697080c3577?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'},
  {
    id: 5,
    nome: 'Coleira Peitoral Antipuxão Ajustável',
    preco: 'R$ 79,90',
    imagem:
      'https://caesegatos.com.br/wp-content/uploads/2150407365.jpg'
     },
  {
    id: 6,
    nome: 'Shampoo Neutro Hipoalergênico 500ml',
    preco: 'R$ 42,50',
    imagem:
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    nome: 'Comedouro Duplo Inox Antiderrapante',
    preco: 'R$ 68,00',
    imagem: 'https://tse4.mm.bing.net/th/id/OIP.O3j7OyNdxltPlfuYwD27GwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  {
    id: 8,
    nome: 'Bolsa de Transporte Aéreo Passeio Pet',
    preco: 'R$ 199,90',
    imagem:
      'https://http2.mlstatic.com/D_NQ_NP_947929-MLB52483245777_112022-F.jpg' },
]

const Produtos = () => {
  return (
    <div className="min-h-screen bg-pale-sky-900">
      {/* Cabeçalho da Página */}
      <section className="bg-baltic-blue py-12 px-4 text-white md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Nossos Produtos 🐾
          </h1>
          <p className="mt-2 text-base text-baltic-blue-800 md:text-lg">
            Confira nossa seleção de alimentos, acessórios e itens de higiene
            para o seu pet.
          </p>
        </div>
      </section>

      {/* Grid Responsivo de Produtos */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listaProdutos.map((produto) => (
            <Card
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Produtos
