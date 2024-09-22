import { useState, useEffect } from "react";
import axios from "axios";
import TableModeleButton from "../../components/Table/Modele/TableModeleButton";
import NavbarAdmin from "../../components/NavbarAdmin";
import { SideBar } from "../../components/SideBar";
import { Link } from "react-router-dom";
import { Button } from "keep-react";

const Secteurs = () => {
  const [dataMyTable, setdataMyTable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMyTable();
  }, []);

  const getMyTable = async () => {
    try {
      setIsLoading(true);
      // Faire une requête GET vers votre backend pour récupérer les secteurs
      const response = await axios.get("https://az-tend-back.onrender.com/admin/sectors");

      // Mettre à jour l'état avec les données récupérées
      setdataMyTable(response.data || []);
    } catch (error) {
      console.error("Erreur lors de la récupération des secteurs :", error);
    } finally {
      setIsLoading(false);
    }
  };

  const [sectorTitle, setSectorTitle] = useState(""); // État pour le titre du secteur
  const [message, setMessage] = useState(""); // Pour afficher les messages de retour

  // Fonction pour gérer le changement de l'input
  const handleInputChange = (e) => {
    setSectorTitle(e.target.value);
  };

  // Fonction pour gérer l'ajout d'un secteur
  const addSector = async () => {
    try {
      const response = await axios.post("https://az-tend-back.onrender.com/admin/sector", {
        title: sectorTitle,
      });

      if (response.status === 201) {
        setMessage("Secteur ajouté avec succès !");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du secteuuuur :", error);
      setMessage("Erreur lors de l'ajout du secteurrrrr");
    }
  };

  const deleteSector = async (sectorId) => {
    try {
      // Requête DELETE vers l'API backend
      const token = localStorage.getItem("token"); // Récupération du token d'authentification
      // const token = "Matoub_3emek";
      const response = await axios.delete(`https://az-tend-back.onrender.com/admin/sector/${sectorId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setMessage("Secteur supprimé avec succès !");
        getMyTable(); // Actualiser les données après la suppression
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du secteur :", error);
      setMessage("Erreur lors de la suppressio");
    }
  };

  return (
    <div className="dark:text-white dark:bg-darkColor min-h-screen">
      <div>
        <NavbarAdmin />
      </div>
      <div className="flex">
        <SideBar className="w-1/4" />
        <div className="w-3/4">
          <div className="grid grid-cols-1 p-6 sm:grid-cols-1 md:grid-cols-3">
            <h5 className="hidden text-heading-5 font-Poppins sm:block">
              Liste des secteurs
            </h5>
            <input
              type="text"
              placeholder="Intitulé"
              className="mr-5 rounded-lg"
              value={sectorTitle}
              onChange={handleInputChange}
            />
            <Button
              color="success"
              className="mt-2 lg:mt-0 md:mt-0"
              onClick={addSector} // L'appel à la fonction pour ajouter un secteur
            >
              Ajouter un secteur
            </Button>
            {message && <p>{message}</p>} {/* Afficher le message si nécessaire */}
          </div>
          <div>
            <TableModeleButton
              headers={[
                { column: "_id", label: "ID" },
                { column: "title", label: "Intitulé" },
              ]}
              data={dataMyTable}
              isLoading={isLoading}
              loadingTag={<span>Loading...</span>}
              delete_func={deleteSector}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Secteurs;
