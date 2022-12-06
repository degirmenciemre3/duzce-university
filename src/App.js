import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom";
import DuDuyuru from './pages/duDuyuru/DuDuyuru';
import Yayin from './pages/yayin/Yayin';
import Personel from './pages/personel/Personel';
import Ogrenci from './pages/ogrenci/Ogrenci';
import Hastane from './pages/hastane/Hastane';
import Teknopark from './pages/teknopark/Teknopark';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="duyuru" element={<DuDuyuru />} />
        <Route path="yayinlar" element={<Yayin />} />
        <Route path="personel" element={<Personel />} />
        <Route path="ogrenci" element={<Ogrenci />} />
        <Route path="hastane" element={<Hastane />} />
        <Route path="teknopark" element={<Teknopark />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
      </Routes>


    </div>
  );
}

export default App;
