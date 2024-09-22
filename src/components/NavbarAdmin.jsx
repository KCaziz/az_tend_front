import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import logoPrimary from "../assets/logoPrimary.png";
import logoDark from "../assets/logoDark.png";
import Darkmode from "./Darkmode";

const NavbarAdmin = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkmode, setIsDarkmode] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    // Fonction pour mettre à jour l'état du thème en fonction de la classe "dark"
    const updateTheme = () => {
      const theme = localStorage.getItem("theme") || "light";
      setIsDarkmode(theme === "dark");
    };

    // Vérification initiale
    updateTheme();

    // Observer les changements du thème
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Nettoyage à la fin
    return () => observer.disconnect();
  }, []);

  return (
    <div id="NavBar" className="bg-white dark:bg-darkColor">
      <div className="container py-1 md:py-1">
        <div className="flex justify-between items-center text-primary dark:text-white dark:bg-darkColor">
          {/* Section Logo */}
          <div className="flex items-center gap-3">
            <img
              src={isDarkmode ? logoPrimary : logoDark}
              alt="Logo"
              className="h-20 md:h-16 transition-all"
            />
            <p className="text-xl md:text-2xl">
              <span className="font-bold text-2xl md:text-3xl ">Tenders </span>
            </p>
          </div>

          {/* Section Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex justify-center items-center">
              <li className="py-4 m-2">
                <Link
                  to="/SignIn"
                  className="border-2 border-black rounded-lg p-2 font-semibold text-1xl md:text-1xl transition-all duration-200 dark:border-white"
                >
                  Profile
                </Link>
              </li>
              {/* Dark Mode features */}
              <Darkmode />
            </ul>
          </nav>

          {/* Menu mobile */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <Darkmode />
              {showMenu ? (
                <RxCross1
                  className="cursor-pointer"
                  size={30}
                  onClick={toggleMenu}
                />
              ) : (
                <IoMdMenu
                  className="cursor-pointer"
                  size={30}
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden flex flex-col items-center bg-gray-100 dark:bg-darkColor dark:text-white overflow-hidden transition-navbar-max-height duration-500 ease-in-out ${
          showMenu ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center w-full">
          <li className="py-4">
            <Link
              to="/SignIn"
              className="border-2 border-black rounded-lg p-2 font-semibold text-2xl md:text-2xl transition-all duration-200 dark:border-white"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarAdmin;
