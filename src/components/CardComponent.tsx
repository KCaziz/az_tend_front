import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "keep-react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export const CardComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-y-4 lg:grid-cols-3 gap-1 max-w-6xl mx-auto justify-items-center mt-10">
      <div>
        <Card
          data-aos="fade-right"
          className="bg-gradient-to-br from-transparent hover:rounded-sm to-green-200 dark:to-green-950 hover:dark:to-darkColor transition-all hover:-translate-y-3 hover:shadow-md"
        >
          <CardContent className="font-Cabin">
            <CardTitle className="text-xl font-bold text-greenLogo dark:text-greenLogo">
              FREE
            </CardTitle>
            <CardDescription className="mt-0 mb-6">
              <p className="text-black dark:text-white text-3xl md:text-5xl font-Cabin text-center my-2">
                0.00 <span className="text-sm font-bold">DA / AN</span>
              </p>
              <p className="text-center text-greenLogo mb-1">-</p>

              <ul className="list-none">
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Voir les titre de tout les
                  Appels d'offre.
                </li>
                <li className="flex items-center mb-1">
                  <ImCross className="inline mr-2" /> Voir les détails des
                  Appels d'offre.
                </li>
                <li className="flex items-center mb-1">
                  <ImCross className="inline mr-2" /> Emails de notification des
                  nouvautées
                </li>
                <li className="flex items-center mb-1">
                  <ImCross className="inline mr-2" /> Voir les affiches des
                  Appels d'offre
                </li>
                <li className="flex items-center mb-1">
                  <ImCross className="inline mr-2" /> Support client et aide
                </li>
              </ul>
            </CardDescription>
            <div className="text-center font-Poppins">
              <a href="#Payment">
                <Button size="lg" color="success">
                  S'abonner
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card
          data-aos="fade-up"
          className="bg-gradient-to-br from-transparent hover:rounded-sm to-green-200 dark:to-green-950 hover:dark:to-darkColor transition-all hover:-translate-y-3 hover:shadow-md"
        >
          <CardContent className="font-Cabin">
            <CardTitle className="text-xl font-bold text-greenLogo dark:text-greenLogo">
              PRO
            </CardTitle>
            <CardDescription className="mt-0 mb-6">
              <p className="text-black dark:text-white text-3xl md:text-5xl font-Cabin text-center my-2">
                10.000 <span className="text-sm font-bold">DA / AN</span>
              </p>
              <p className="text-center text-greenLogo mb-1">
                8 secteurs gratuits + 1.000 / secteur
              </p>

              <ul className="list-none">
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Voir les titre de tout les
                  Appels d'offre.
                </li>
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Voir les détails des
                  Appels d'offre.
                </li>
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Emails de notification des
                  nouvautées.
                </li>
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Voir les affiches des
                  Appels d'offre.
                </li>
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Support client et aide.
                </li>
              </ul>
            </CardDescription>
            <div className="text-center font-Poppins">
              <a href="#Payment">
                <Button size="lg" color="success">
                  S'abonner
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card
          data-aos="fade-left"
          className="bg-gradient-to-br from-transparent hover:rounded-sm to-green-200 dark:to-green-950 hover:dark:to-darkColor transition-all hover:-translate-y-3 hover:shadow-md"
        >
          <CardContent className="font-Cabin">
            <CardTitle className="text-xl font-bold text-greenLogo dark:text-greenLogo">
              BUSINESS
            </CardTitle>
            <CardDescription className="mt-0 mb-6">
              <p className="text-black dark:text-white text-3xl md:text-5xl font-Cabin text-center my-2">
                20.000 <span className="text-sm font-bold">DA / AN</span>
              </p>
              <p className="text-center text-greenLogo mb-1">
                Tout secteur inclus
              </p>

              <ul className="list-none">
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Voir les titre de tout les
                  Appels d'offre.
                </li>
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Voir les détails des
                  Appels d'offre.
                </li>
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Emails de notification des
                  nouvautées
                </li>
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Voir les affiches des
                  Appels d'offre
                </li>
                <li className="flex items-center mb-1">
                  <FaCheck className="inline mr-2" /> Support client et aide
                </li>
              </ul>
            </CardDescription>
            <div className="text-center font-Poppins">
              <a href="#Payment">
                <Button size="lg" color="success">
                  S'abonner
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
