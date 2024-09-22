import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { Button } from "keep-react";
import { SideBar } from "../../components/SideBar";
import NavbarAdmin from "../../components/NavbarAdmin";
// import AnnonceTable from "../../components/Admin/FilterTenders";
import TableModeleType from "../../components/Table/Modele/TableModeleType";
import axios from "axios";

const Tenders = () => {
  const [dataMyTable, setdataMyTable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(""); // Pour afficher les messages de retour


  useEffect(() => {
    getMyTable();
  }, []);

  const getMyTable = async () => {
    try {
      setIsLoading(true);
      // Faire une requête GET vers votre backend pour récupérer les secteurs
      const response = await axios.get("https://az-tend-back.onrender.com/admin/tenders");
      
      // Mettre à jour l'état avec les données récupérées
      setdataMyTable(response.data.tenders || []);      
    } catch (error) {
      console.error("Erreur lors de la récupération des secteurs :", error);
    } finally {
      setIsLoading(false);
    }
  };

  const editTenders = async (tenderID) => {
    window.location.href = "/Admin/Tenders/Edit";
    // Passage des données du tender via l'état
    localStorage.setItem('tenderToEdit', JSON.stringify(tenderID));
  };

  const deleteTenders = async (TendersId) => {
    try {
      // Requête DELETE vers l'API backend
      const token = localStorage.getItem("token"); // Récupération du token d'authentification
      const response = await axios.delete(`https://az-tend-back.onrender.com/admin/tender/${TendersId}`, {
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
          <div className="grid grid-cols-1 p-6 sm:grid-cols-1 md:grid-cols-2">
            <h5 className="hidden  text-heading-5 font-Poppins sm:block">
              {" "}
              Liste des Annonces{" "}
            </h5>
            <Link to="/Admin/Tenders/Ajout">
            <Button color="success">
              Ajouter une annonce
            </Button>
            </Link>
          </div>
          <div className="border-2 border-black rounded-lg p-2 ml-4">
            <TableModeleType
              headers={[
                { column: "_id", label: "ID" },
                { column: "title", label: "Titre" },
                { column: "entreprise", label: "Entreprise" },
                { column: "anep", label: "Num Anep" },
                { column: "journal", label: "Journal" },
                { column: "type", label: "type" },
                { column: "dateDebut", label: "Date Publication" },
                { column: "dateEchehance", label: "Date Echehance" },
                { column: "wilaya", label: "Wilaya" },
                { column: "sectors", label: "Secteurs" },

              ]}
              data={dataMyTable}
              isLoading={isLoading}
              loadingTag={<h1>Loading...</h1>}
              edit_func={editTenders}
              delete_func={deleteTenders}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenders;
