import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 dark:text-black dark:bg-darkColor">

      <div className=" h-[120px] border border-gray-200 bg-white text-dark p-6 rounded-lg shadow-md hover:bg-gray-200">
        <Link to="/tenders">
          <h2 className="text-xl font-bold mb-1">Tenders</h2>
          <p>Nombre de Tenders : 25</p>
        </Link>
      </div>


      <div className="h-[120px] border border-gray-200 bg-white text-dark p-6 rounded-lg shadow-md hover:bg-gray-200">
        <Link to='/'>

          <h2 className="text-xl font-bold mb-1">Secteurs</h2>
          <p>Nombre de Secteurs : 12</p>
        </Link>
      </div>


      <div className="h-[120px] border border-gray-200 bg-white text-dark p-6 rounded-lg shadow-md hover:bg-gray-200">
        <Link to='/'>
          <h2 className="text-xl font-bold mb-1">Utilisateurs</h2>
          <p>Nombre d'Utilisateurs : 150</p>
        </Link>
      </div>


      <div className="h-[120px] border border-gray-200 bg-white text-dark p-6 rounded-lg shadow-md hover:bg-gray-200">
        <Link to='/'>
          <h2 className="text-xl font-bold mb-1">Abonnements</h2>
          <p>Nombre d'Abonnements : 30</p>
        </Link>
      </div>


      <div className="h-[120px] border border-gray-200 bg-white text-dark p-6 rounded-lg shadow-md hover:bg-gray-200">
        <Link to='/'>
          <h2 className="text-xl font-bold mb-1">Administrateurs</h2>
          <p>Nombre d'Administrateurs : 5</p>
        </Link>
      </div>


      <div className="h-[120px] border border-gray-200 bg-white text-dark p-6 rounded-lg shadow-md hover:bg-gray-200">
        <Link to='/'>
          <h2 className="text-xl font-bold mb-1">Contact</h2>
          <p>Messages reçus : 20</p>
        </Link>
      </div>
    </div>

  );
};

export default AdminDashboard;
