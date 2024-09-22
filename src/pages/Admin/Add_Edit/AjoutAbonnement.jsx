import React, { useState, useEffect } from 'react';
import { SideBar } from '../../../components/SideBar';
import NavbarAdmin from '../../../components/NavbarAdmin';
import axios from 'axios';
import { Button } from 'keep-react';

const AjoutAbonnement = () => {
  const [users, setUsers] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [type, setType] = useState('Base');
  const [dateDeb, setDateDeb] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // pour gérer les erreurs

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://az-tend-back.onrender.com/admin/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs", error);
      }
    };

    const fetchSectors = async () => {
      try {
        const response = await axios.get('https://az-tend-back.onrender.com/admin/sectors');
        setSectors(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des secteurs", error);
      }
    };

    fetchUsers();
    fetchSectors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (new Date(dateDeb) > new Date(dateFin)) {
      alert("La date de début ne peut pas être après la date de fin.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('https://az-tend-back.onrender.com/admin/abonnement', {
        userId: selectedUser,
        type,
        sectors: selectedSectors,
        dateDeb,
        dateFin,
      });

      if (response.status === 201) {
        alert("Abonnement ajouté avec succès");
        window.location.href = "/Admin/Abonnement";
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'admin :", error.response.data.message);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <NavbarAdmin />
      <div className="flex">
        <SideBar className="w-1/4 min-h-screen" />
        <div className="w-3/4 p-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Ajouter un Abonnement
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Utilisateur:</label>
                  <select
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Sélectionner un utilisateur</option>
                    {users.map((user) => (
                      <option key={user._id} value={user._id}>
                        {user.nom} {user.prenom}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type d'abonnement:</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="Base">Base</option>
                    <option value="Argent">Argent</option>
                    <option value="Gold">Gold</option>
                  </select>
                </div>
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Secteurs:</label>
                <div className="mt-1 grid grid-cols-2 gap-4"> {/* Grid pour un meilleur alignement */}
                  {sectors.map((sector) => (
                    <div key={sector._id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={sector._id}
                        value={sector._id}
                        checked={selectedSectors.includes(sector._id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSectors([...selectedSectors, sector._id]);
                          } else {
                            setSelectedSectors(selectedSectors.filter(id => id !== sector._id));
                          }
                        }}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <label htmlFor={sector._id} className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                        {sector.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date de début:</label>
                  <input
                    type="date"
                    value={dateDeb}
                    onChange={(e) => setDateDeb(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date de fin:</label>
                  <input
                    type="date"
                    value={dateFin}
                    onChange={(e) => setDateFin(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                {error && (
                  <div className="text-red-500 mb-4">{error}</div> // Afficher les erreurs
                )}
                <Button
                  type="submit"
                  color="success"
                  disabled={isLoading}
                  className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  {isLoading ? "Ajout en cours..." : "Ajouter Abonnement"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AjoutAbonnement;
