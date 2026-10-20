import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-blue-slate p-4 text-pale-sky shadow-lg'>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <h1 className='text-5xl'>🐶</h1>
          <h2 className='text-xl font-bold sm:text-2xl'>Bem vindo a PetMania!</h2>
        </div>
        <ul className='flex items-center gap-2 sm:gap-4'>
          <li className='hover:font-bold hover:-translate-y-1 p-2 hover:bg-blue-slate-300 hover:shadow-2xl rounded-2xl hover:cursor-pointer transition-all'>Home</li>
          <li className='hover:font-bold hover:-translate-y-1 p-2 hover:bg-blue-slate-300 hover:shadow-2xl rounded-2xl hover:cursor-pointer transition-all'>Produtos</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
