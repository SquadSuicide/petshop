import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      {/* <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{" | "}
          <Link to="/contato">Contato</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App
