import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import Axios
import { SideBar } from '../../../components/SideBar';
import NavbarAdmin from '../../../components/NavbarAdmin';
import { Input, Button } from 'keep-react';
import { Link, useNavigate } from 'react-router-dom';

const wilayas = ["Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra",
    "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret",
    "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda",
    "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem",
    "M’Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj",
    "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela",
    "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane",
    'Timimoune', 'Bordj Badji Mokhtar', 'Ouled Djellal', 'Béni Abbès', 'In Salah', 'In Guezzam',
    'Touggourt', 'Djanet', "El M'Ghair", 'El Meniaa'];
  

const EditProfile = () => {
    const [error, setError] = useState(""); // pour gérer les erreurs
    const [user, setUser] = useState(null); // Laisser user null au départ
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        tel: '',
        wilaya: '',
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('userToEdit');
        localStorage.removeItem('userToEdit')
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser); // Mettre à jour l'utilisateur
            setFormData({ // Synchroniser formData avec user une fois récupéré
                _id: parsedUser._id,
                nom: parsedUser.nom,
                prenom: parsedUser.prenom,
                email: parsedUser.email,
                tel: parsedUser.tel,
                wilaya: parsedUser.wilaya,
            });
        } else {
            setError('Aucun utilisateur trouvé dans localStorage');
        }
    }, []); // Ce useEffect se déclenche lors du montage pour charger les données de l'utilisateur
    const navigate = useNavigate(); // Pour rediriger après la soumission

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');  // Assurez-vous que le token est stocké dans localStorage
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };

            // Envoyer la requête PUT pour mettre à jour les informations de l'utilisateur
            const response = await axios.post('https://az-tend-back.onrender.com/admin/update-personal-info', formData, config);

            if (response.status === 200) {
                alert('Profil mis à jour avec succès');
                navigate('/Admin');
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'admin :", error);
            setError('Une erreur est survenue lors de la mise à jour du profil');
        }
    };

    if (!user) return <p>Loading...</p>; // Affiche un message de chargement pendant que user est null

    return (
        <div className="min-h-screen bg-white dark:bg-darkColor">
            <div>
                <NavbarAdmin />
            </div>
            <div className="flex">
                <SideBar className="w-1/4 min-h-screen" />
                <div className="w-3/4">
                    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-5">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                            <h2 className="text-2xl font-bold mb-6 text-center">Modification du profile</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Nom</label>
                                    <Input
                                        type="text"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-white dark:text-black"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Prenom</label>
                                    <Input
                                        type="text"
                                        name="prenom"
                                        value={formData.prenom}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-white dark:text-black"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-white dark:text-black"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                                    <Input
                                        type="text"
                                        name="tel"
                                        value={formData.tel}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 p-3 rounded-md focus:outline-none focus:border-indigo-500 dark:bg-white dark:text-black"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="text-gray-700 font-semibold">
                                        Wilaya
                                    </label>
                                    <div className="relative text-gray-300">
                                        <select
                                            name="wilaya"
                                            value={formData.wilaya}
                                            onChange={handleInputChange}
                                            className="block w-full bg-white dark:bg-gray-800  border border-black rounded-lg shadow-sm mt-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        >
                                            <option value="" disabled>

                                            </option>
                                            {wilayas.map((wilaya, index) => (
                                                <option key={wilaya} value={wilaya}>
                                                    {`${(index + 1).toString().padStart(2, '0')}-${wilaya}`}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {error && (
                                    <div className="text-red-500 mb-4">{error}</div> // Afficher les erreurs
                                )}
                                <div className="flex justify-between items-center">
                                    <Button color="primary" className="w-auto px-4 py-2" type="submit">
                                        Confirmer
                                    </Button>
                                    <Link to='/Admin'>
                                        <Button color="secondary" className="w-auto px-4 py-2">Annuler</Button>
                                    </Link>
                                    <Link to='/Admin/Profile/Edit/Password'>
                                        <Button color="primary" className="w-auto px-4 py-2">Mot de passe</Button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
