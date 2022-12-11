import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Admin from '../pages/admin/Admin'
import AddDuyuru from '../pages/admin/adminDuyuru/AddDuyuru'
import AdminDuyuru from '../pages/admin/adminDuyuru/AdminDuyuru'
import UpdateDuyuru from '../pages/admin/adminDuyuru/UpdateDuyuru'
import AdminOgrenci from '../pages/admin/adminOgrenci/AdminOgrenci'
import AddYayin from '../pages/admin/adminYayin/AddYayin'
import AdminYayin from '../pages/admin/adminYayin/AdminYayin'
import UpdateYayin from '../pages/admin/adminYayin/UpdateYayin'
import DuDuyuru from '../pages/duDuyuru/DuDuyuru'
import Login from '../pages/login/Login'
import Ogrenci from '../pages/ogrenci/Ogrenci'
import Personel from '../pages/personel/Personel'
import Yayin from '../pages/yayin/Yayin'
import YayinDetay from '../pages/yayin/YayinDetay'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="duyuru" element={<DuDuyuru />} />
        <Route path="yayinlar" element={<Yayin />} />
        <Route path="personel" element={<Personel />} />
        <Route path="ogrenci" element={<Ogrenci />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
        <Route path="admin/duyuru" element={<AdminDuyuru />} />
        <Route path="admin/yayin" element={<AdminYayin />} />
        <Route path="admin/ogrenci" element={<AdminOgrenci />} />
        <Route path="admin/duyuru/ekle" element={<AddDuyuru />} />
        <Route path="admin/duyuru/guncelle/:id" element={<UpdateDuyuru />} />
        <Route path="/admin/yayin/guncelle/:id" element={<UpdateYayin />} />
        <Route path='/admin/yayin/ekle' element={<AddYayin />} />
        <Route path="/yayinlar/detay/:id" element={<YayinDetay />} />
      </Routes>

    </>
  )
}

export default Routers