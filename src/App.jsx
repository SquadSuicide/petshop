import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Produtos from './pages/Produtos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;