import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import DuDuyuru from './pages/duDuyuru/DuDuyuru';
import Header from "./components/header/Header"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="duyuru" element={<DuDuyuru />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
