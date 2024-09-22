import React, { useState, useEffect } from "react";
import axios from "axios";
import TableModeleContact from "../../components/Table/Modele/TableModeleContact";
import NavbarAdmin from "../../components/NavbarAdmin";
import { SideBar } from "../../components/SideBar";
import { Link } from 'react-router-dom';
import { Button } from 'keep-react';

function Contacts() {
  const [dataMyTable, setdataMyTable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMyTable();
  }, []);

  const getMyTable = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://az-tend-back.onrender.com/admin/messages");

      // Set state values
      setdataMyTable(response.data.messages || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsSeenMessage = async (contactId) => {
    try {
      const token = localStorage.getItem("token"); // Récupération du token d'authentification
      const response = await axios.put(`https://az-tend-back.onrender.com/admin/message/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        alert("contact vu avec succès !");
        getMyTable(); 
      }
    } catch (error) {
      console.error("Erreur lors de la vision du contact :", error);
      alert("Erreur lors de la vision");
    }
  };

  const deleteContact = async (contactId) => {
    try {
      // Requête DELETE vers l'API backend
      const token = localStorage.getItem("token"); // Récupération du token d'authentification
      // const token = "Matoub_3emek";
      const response = await axios.delete(`https://az-tend-back.onrender.com/admin/message/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 204) {
        alert("contact supprimé avec succès !");
        getMyTable(); // Actualiser les données après la suppression
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du contact :", error);
      alert("Erreur lors de la suppression");
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
            <h5 className='hidden  text-heading-5 font-Poppins sm:block'> Messages </h5>
          </div>
          <div className=''>
            <TableModeleContact
              headers={[
                { column: "_id", label: "ID" },
                { column: "nom", label: "nom" },
                { column: "tel", label: "tel" },
                { column: "email", label: "email" },
                { column: "body", label: "body" },
              ]}
              data={dataMyTable}
              isLoading={isLoading}
              loadingTag={<h1>Loading...</h1>}
              onMarkAsSeen={markAsSeenMessage}
              onDelete={deleteContact}
            />
          </div>



        </div>
      </div>
    </div>
  );
}

export default Contacts