import React, { useState, useEffect } from 'react';
import TableModeleButton from "../../components/Table/Modele/TableModeleButton";
import TableModeleMono from "../../components/Table/Modele/TableModeleMono";
import { Button } from 'keep-react';
import JsonData from '../../components/Admin/JsonData.json';
import NavbarAdmin from "../../components/NavbarAdmin";
import { SideBar } from "../../components/SideBar";
import { Link } from "react-router-dom";
import axios from 'axios';

const Abonnements = () => {
  const [message, setMessage] = useState(null);
  const [dataMyTable, setdataMyTable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTable, setActiveTable] = useState('updated'); // Gère quel tableau est actif

  useEffect(() => {
    localStorage.removeItem('SubToEdit')
    getMyTable();
  }, []);

  const getMyTable = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5555/admin/abonnements");

      setdataMyTable(response.data.subscriptions || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const [showButtons, setShowButtons] = useState(false); // État pour afficher les boutons

  const handleToggle = () => {
    setShowButtons((prev) => !prev); // Bascule entre les vues
  };

  // decomposer les structures de donnés pour les integrer a une seule 
  const flattenedData = dataMyTable.map((item) => ({
    _id: item._id,
    nom: item.user ? item.user.nom : '',
    prenom: item.user ? item.user.prenom : '',
    type: item.type,
    status: item.status,
    sectors: item.sectors ? item.sectors.map(sector => sector.title).join(', ') : '', // Extraire les titres des secteurs et les joindre
  }));

  const editSub = async (SubID) => {    
    window.location.href = "/Admin/Abonnements/Edit";
    // Passage des données du tender via l'état
    localStorage.setItem('SubToEdit', JSON.stringify(SubID));
  };

  const deleteSub = async (SubId) => {
    try {
      // Requête DELETE vers l'API backend
      const token = localStorage.getItem("token"); // Récupération du token d'authentification
      const response = await axios.delete(`http://localhost:5555/admin/abonnement/${SubId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setMessage("Abonnement supprimé avec succès !");
        getMyTable(); // Actualiser les données après la suppression
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du secteur :", error);
      setMessage("Erreur lors de la suppressio");
    }
  };
  const filterSubscriptionsByStatus = (stat) => {
    return flattenedData.filter(sub => sub.status === stat);
  };

  return (

    <div className="dark:bg-darkColor dark:text-white">
      <div>
        <NavbarAdmin />
      </div>
      <div className="flex">
        <SideBar className="w-1/4" />
        <div className="w-3/4">
          <div className="p-4">
            <div className='flex'>
              <h3 className='hidden md:inline lg:inline font-Poppins text-heading-3'>Abonnements</h3>
              <Link to="/Admin/Abonnements/Ajout">
              <Button color='success' className='my-1 lg:ml-auto md:ml-auto'>Ajouter un abonnements</Button>
              </Link>
            </div>
          </div>
          {/* Bouton TEST */}
          <div className='flex  justify-center '>
            <Link to='/Admin/Abonnements/Edit'>
              <Button color='primary'>Edit</Button>
            </Link>
          </div>

          {message && <p className="mb-4 text-black">{message}</p>}
          <div className="mb-4">
            <Button
              onClick={() => setActiveTable('updated')}
              className={`p-2 mr-1 rounded ${activeTable === 'updated'
                ? 'bg-gray-500 text-white cursor-not-allowed' // Style pour désactiver le bouton
                : 'bg-blue-500 text-white'
                }`}
              disabled={activeTable === 'updated'} // Désactiver le bouton actif
            >
              Abonnements
            </Button>

            {/* Bouton pour afficher le TableModele avec boutons (edit, delete) */}
            <Button
              onClick={() => setActiveTable('asked')}
              className={`p-2 mr-1 rounded ${activeTable === 'asked'
                ? 'bg-gray-500 text-white cursor-not-allowed' // Style pour désactiver le bouton
                : 'bg-blue-500 text-white'
                }`}
              disabled={activeTable === 'asked'} // Désactiver le bouton actif
            >
              Demandes
            </Button>

            {/* Bouton pour afficher le TableModele avec boutons (edit, delete) */}
            <Button
              onClick={() => setActiveTable('expired')}
              className={`p-2 mr-1 rounded ${activeTable === 'expired'
                ? 'bg-gray-500 text-white cursor-not-allowed' // Style pour désactiver le bouton
                : 'bg-blue-500 text-white'
                }`}
              disabled={activeTable === 'expired'} // Désactiver le bouton actif
            >
              Expirés
            </Button>
            <Button
              onClick={() => setActiveTable('deleted')}
              className={`p-2 rounded ${activeTable === 'deleted'
                ? 'bg-gray-500 text-white cursor-not-allowed' // Style pour désactiver le bouton
                : 'bg-blue-500 text-white'
                }`}
              disabled={activeTable === 'deleted'} // Désactiver le bouton actif
            >
              Supprimés
            </Button>
          </div>
          {activeTable === 'updated' ? (
            <TableModeleButton
              headers={[
                { column: "_id", label: "_id" },
                { column: "nom", label: "nom" },
                { column: "type", label: "types" },
                { column: "sectors", label: "secteurs" },
                { column: "status", label: "status" },
              ]}
              data={filterSubscriptionsByStatus("updated")}
              isLoading={isLoading}
              loadingTag={<h1>Loading...</h1>} // Affiche TableModeleButton
              edit_func={editSub}
              delete_func={deleteSub}
            />
          ) : activeTable === 'asked' ? (
            <TableModeleButton
              headers={[
                { column: "_id", label: "_id" },
                { column: "nom", label: "nom" },
                { column: "type", label: "types" },
                { column: "sectors", label: "secteurs" },
                { column: "status", label: "status" },
              ]}
              data={filterSubscriptionsByStatus("asked")} // Utilise des données spécifiques pour 'expired'
              isLoading={isLoading}
              loadingTag={<h1>Loading expired data...</h1>} // Affiche TableModeleButton pour 'expired'
            />
          ) : activeTable === 'expired' ? (
            <TableModeleButton
              headers={[
                { column: "_id", label: "_id" },
                { column: "nom", label: "nom" },
                { column: "type", label: "types" },
                { column: "sectors", label: "secteurs" },
                { column: "status", label: "status" },
              ]}
              data={filterSubscriptionsByStatus("expired")}
              isLoading={isLoading}
              loadingTag={<h1>Loading...</h1>} // Affiche TableModele normal
            />
          ) : (           
            <TableModeleMono
            headers={[
              { column: "_id", label: "_id" },
              { column: "nom", label: "nom" },
              { column: "type", label: "types" },
              { column: "sectors", label: "secteurs" },
              { column: "status", label: "status" },
            ]}
            data={filterSubscriptionsByStatus("deleted")}
            isLoading={isLoading}
            loadingTag={<h1>Loading...</h1>} // Affiche TableModele normal
          />
        )
        }

        </div>


      </div>
    </div>
  );
};

export default Abonnements;
