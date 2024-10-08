import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  h1,
} from "@material-tailwind/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Pattern from "../../assets/pattern.png";

const wilayas = [ "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra",
  "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret",
  "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda",
  "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem",
  "M’Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj",
  "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela",
  "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa","Relizane",
  'Timimoune', 'Bordj Badji Mokhtar', 'Ouled Djellal', 'Béni Abbès', 'In Salah', 'In Guezzam',
  'Touggourt', 'Djanet', "El M'Ghair",'El Meniaa'];

export function SignUp() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    wilaya: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification si les champs sont vides
    if (!formData.nom || !formData.prenom || !formData.email || !formData.tel || !formData.wilaya || !formData.password || !formData.passwordConfirm) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    // Vérification si les mots de passe correspondent
    if (formData.password !== formData.passwordConfirm) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await axios.post("https://az-tend-back.onrender.com/auth/signup", {
        nom: formData.nom,
        prenom: formData.prenom,
        tel: formData.tel,
        wilaya: formData.wilaya,
        email: formData.email,
        password: formData.password,
        passwordConfirm: formData.passwordConfirm,
      });

      if (response.status === 201) {
        // Redirection vers la page de connexion ou tableau de bord après inscription
        navigate("/SignIn");
      } else {
        setErrorMessage(data.message || "Erreur lors de l'inscription");
      }
    } catch (error) {
      alert(error.response.data.message.message) // a dupiliqer sur tt les forms
      console.error('Erreur:', error);
    }
  };

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src={Pattern}
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="font-bold mb-4 text-heading-2">Inscrivez-vous</h2>
          <h1 variant="paragraph" color="blue-gray" className="text-lg font-semibold">
            Entrez vos informations pour vous inscrire.
          </h1>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <h1 color="blue-gray" className="-mb-3 font-bold">
              Votre nom
            </h1>
            <Input
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              size="lg"
              placeholder="Nom"
              autoComplete="family-name"
              required
            />
            <h1 color="blue-gray" className="-mb-3 font-bold">
              Votre prénom
            </h1>
            <Input
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              size="lg"
              placeholder="Prénom"
              autoComplete="given-name"
              required
            />
            <h1 color="blue-gray" className="-mb-3 font-bold">
              Votre email
            </h1>
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              size="lg"
              placeholder="name@mail.com"
              autoComplete="email"
              required
            />
            <h1 color="blue-gray" className="-mb-3 font-bold">
              Votre téléphone
            </h1>
            <Input
              name="tel"
              value={formData.tel}
              onChange={handleInputChange}
              size="lg"
              placeholder="Téléphone"
              autoComplete="tel"
              required
            />

            <h1 color="blue-gray" className="-mb-3 font-bold">
              Votre wilaya
            </h1>
            <select
              name="wilaya"
              value={formData.wilaya}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-2"
              required
            >
              <option value=""></option>
              {wilayas.map((wilaya, index) => (
                <option key={wilaya} value={wilaya}>
                  {`${(index + 1).toString().padStart(2, '0')}-${wilaya}`}
                </option>
              ))}
            </select>

            <h1 color="blue-gray" className="-mb-3 font-bold">
              Mot de passe
            </h1>
            <Input
              name="password"
              type="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleInputChange}
              size="lg"
              placeholder="Mot de passe"
              required
            />
            <h1 color="blue-gray" className="-mb-3 font-bold">
              Confirmer le mot de passe
            </h1>
            <Input
              name="passwordConfirm"
              type="password"
              autoComplete="new-password"
              value={formData.passwordConfirm}
              onChange={handleInputChange}
              size="lg"
              placeholder="Confirmez le mot de passe"
              required
            />
          </div>

          {errorMessage && (
            <div className="text-red-500 text-center my-4">{errorMessage}</div>
          )}

          <Checkbox
            label={
              <h1
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                J'accepte les&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Termes et Conditions
                </a>
              </h1>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 bg-gray-900" fullWidth type="submit">
            <span className="text-white">Inscrivez-vous</span>
          </Button>

          <div className="space-y-4 mt-8">
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <FcGoogle size={20} />
              <span>Utilisez Google</span>
            </Button>
          </div>
          <h1 variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Déjà un compte?
            <Link to="/SignIn" className="text-blue-900 ml-1">Se connecter</Link>
          </h1>
        </form>
      </div>
    </section>
  );
}

export default SignUp;

