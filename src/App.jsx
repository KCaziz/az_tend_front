import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import SignIn from "./pages/Auth/sign-in";
import SignUp from "./pages/Auth/sign-up";

import UserProfile from "./pages/User/UserProfile";
import UserEditProfile from "./pages/User/UserEditProfile";
import UserEditPassword from "./pages/User/UserEditPassword";

import Offres from "./pages/User/Offres";
import TenderDetails from "./pages/User/TenderDetails";
import UserHome from "./pages/User/UserHome";

import AdminHome from "./pages/Admin/AdminHome";

import AjoutTenders from "./pages/Admin/Add_Edit/AjoutTenders";
import EditTenderForm from "./pages/Admin/Add_Edit/EditTenders";
import Tenders from "./pages/Admin/Tenders";

import Secteurs from "./pages/Admin/Secteurs";

import Utilisateurs from "./pages/Admin/Utilisateurs";

import AjoutAdmin from "./pages/Admin/Add_Edit/AjoutAdmin";
import Administrateurs from "./pages/Admin/Administrateurs";

import Abonnements from "./pages/Admin/Abonnements";
import AjoutAbonnements from './pages/Admin/Add_Edit/AjoutAbonnement';
import EditAbonnement from "./pages/Admin/Add_Edit/EditAbonnement";

import Contacts from "./pages/Admin/Contacts";

import Profile from './pages/Admin/Profile'
import EditProfile from './pages/Admin/Add_Edit/EditProfile';
import EditPassword from './pages/Admin/Add_Edit/EditPassword';



// va contenir l'url et la page(template) de cette derniere
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/UserHome" element={<UserHome />} />
      <Route path="/Profile" element={<UserProfile />} />
      <Route path="/Profile/Edit" element={<UserEditProfile />} />
      <Route path="/Profile/Edit/Password" element={<UserEditPassword />} />


      <Route path="/UserHome/Offres" element={<Offres />} />
      <Route path="/TenderDetails/:id" element={<TenderDetails />} />

      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />

      <Route path="/Admin" element={<AdminHome />} />

      <Route path="/Admin/Tenders" element={<Tenders />} />
      <Route path="/Admin/Tenders/Ajout" element={<AjoutTenders />} />
      <Route path="/Admin/Tenders/Edit" element={<EditTenderForm />} />

      <Route path="/Admin/Secteurs" element={<Secteurs />} />
      <Route path="/Admin/Utilisateurs" element={<Utilisateurs />} />

      <Route path="/Admin/Administrateurs" element={<Administrateurs />} />
      <Route path="/Admin/Administrateurs/Ajout" element={<AjoutAdmin />} />

      <Route path='/Admin/Abonnements' element={<Abonnements />} />
      <Route path='/Admin/Abonnements/Ajout' element={<AjoutAbonnements />} />
      <Route path='/Admin/Abonnements/Edit' element={<EditAbonnement />} />

      <Route path="/Admin/Contacts" element={<Contacts />} />

      <Route path="/Admin/Profile" element={<Profile />} />
      <Route path="/Admin/Profile/Edit" element={<EditProfile />} />
      <Route path="/Admin/Profile/Edit/Password" element={<EditPassword />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
