import React, { useState, useEffect } from "react";
import TableModeleButton from "../../components/Table/Modele/TableModeleButton";
import NavbarAdmin from "../../components/NavbarAdmin";
import { SideBar } from "../../components/SideBar";
import { Link } from 'react-router-dom';
import { Button } from 'keep-react';
import axios from "axios";

function Administrateurs() {
  const [dataMyTable, setdataMyTable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    getMyTable();
  }, []);

  const getMyTable = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://az-tend-back.onrender.com/admin/admins");
      setdataMyTable(response.data.data.users || []); //Merci pour cette ligne youva ^^ j'ai pris tres peut de temps, et beaucoup de plaisir a l'ecrire
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAdmin = async (adminId) => {
    try {
      // Requête DELETE vers l'API backend
      const token = localStorage.getItem("token"); // Récupération du token d'authentification
      // const token = "Matoub_3emek";
      const response = await axios.delete(`https://az-tend-back.onrender.com/admin/admin/${adminId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setMessage("admin supprimé avec succès !");
        getMyTable(); // Actualiser les données après la suppression
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de l'admin :", error);
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
            <div className='grid grid-cols-1 p-6 sm:grid-cols-1 md:grid-cols-3'>
                <h5 className='hidden  text-heading-5 font-Poppins sm:block'> Liste des Admins </h5>
                <Button color='success'>
                    <Link to='/Admin/Administrateurs/Ajout'>Ajouter un Admin</Link>
                </Button>
            </div>
            <div className=''>
      <TableModeleButton
        headers={[
          { column: "_id", label: "ID" },
          { column: "nom", label: "Nom" },
          { column: "prenom", label: "Prenom" },
          { column: "tel", label: "Telephone" },
          { column: "email", label: "E-Mail" },
          { column: "wilaya", label: "Wilaya" },
          { column: "nbrTenders", label: "Nb Tenders" },

        ]}
        data={dataMyTable}
        isLoading={isLoading}
        loadingTag={<h1>Loading...</h1>}
        delete_func={deleteAdmin} 
      />
      </div>



</div>
</div>
</div>
  );
}

export default Administrateurs