import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import DuDuyuru from './pages/duDuyuru/DuDuyuru';
import Header from "./components/header/Header"
import Yayin from './pages/yayin/Yayin';
import Personel from './pages/personel/Personel';
import Ogrenci from './pages/ogrenci/Ogrenci';
import Hastane from './pages/hastane/Hastane';
import Teknopark from './pages/teknopark/Teknopark';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="duyuru" element={<DuDuyuru />} />
        <Route path="yayinlar" element={<Yayin />} />
        <Route path="personel" element={<Personel />} />
        <Route path="ogrenci" element={<Ogrenci />} />
        <Route path="hastane" element={<Hastane />} />
        <Route path="teknopark" element={<Teknopark />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
