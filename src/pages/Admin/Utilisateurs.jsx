import React, { useState, useEffect } from "react";
import axios from "axios";
import TableModeleVerify from "../../components/Table/Modele/TableModeleVerify";
import NavbarAdmin from "../../components/NavbarAdmin";
import { SideBar } from "../../components/SideBar";

const Utilisateurs = () => {
  const [dataMyTable, setdataMyTable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMyTable();
  }, []);

  const getMyTable = async () => {
    try {
      setIsLoading(true);
      // Faire une requête GET vers votre backend pour récupérer les secteurs
      const response = await axios.get("https://az-tend-back.onrender.com/admin/users");
      console.log(response);

      // Mettre à jour l'état avec les données récupérées
      setdataMyTable(response.data.users || []);
    } catch (error) {
      console.error("Erreur lors de la récupération des Utilisateur :", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dark:bg-darkColor dark:text-white">
      <div>
        <NavbarAdmin />
      </div>
      <div className="flex">
        <SideBar className="w-1/4" />
        <div className="w-3/4">
          <TableModeleVerify
            headers={[
              { column: "_id", label: "ID" },
              { column: "nom", label: "Nom" },
              { column: "tel", label: "Tel" },
              { column: "wilaya", label: "Wilaya" },
              { column: "abonne", label: "Abonnement" },
            ]}
            data={dataMyTable}
            isLoading={isLoading}
            loadingTag={<span>Loading...</span>}
          />
        </div>
      </div>
    </div>
  );
};

export default Utilisateurs;
