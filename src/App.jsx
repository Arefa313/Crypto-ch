import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Show from './pages/Show';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/Cryptopanel/" element={<Home />} />
          <Route path="*" element={<Navigate to="/Cryptopanel/" />} />
          <Route path="/Cryptopanel/:id" element={<Show />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
