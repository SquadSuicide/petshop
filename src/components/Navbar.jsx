import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-alice-blue p-4 text-baltic-blue shadow-2xl'>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <img
            src='/src/assets/logo.png'
            alt='Logo da PetMania'
            className='h-12 w-auto rounded-2xl'/>
          <h2 className='text-xl font-bold sm:text-2xl'>Bem vindo a <span className='text-baltic-blue-600'>PetMania!</span></h2>
        </div>
        <ul className='flex items-center gap-2 sm:gap-4'>
          <li className='hover:font-bold hover:-translate-y-1 p-2 hover:bg-baltic-blue-600 hover:shadow-2xl rounded-2xl hover:cursor-pointer hover:text-pale-sky transition-all'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:font-bold hover:-translate-y-1 p-2 hover:bg-baltic-blue-600 hover:shadow-2xl rounded-2xl hover:cursor-pointer hover:text-pale-sky transition-all'>
            <Link to="/produtos">Produtos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
