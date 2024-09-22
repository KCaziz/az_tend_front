import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import logoPrimary from "../assets/logoPrimary.png";
import logoDark from "../assets/logoDark.png";
import Darkmode from "./Darkmode";

const navLinks = [
  {
    id: 1,
    name: "Offres",
    link: "#Offres",
  },
  {
    id: 2,
    name: "A Propos",
    link: "#AboutUs",
  },
  {
    id: 3,
    name: "Contact",
    link: "#Contact",
  },
];

const Navbar = () => {
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
    <div id="NavBar" className="font-Cabin">
      <div className="container py-2">
        <div className="flex justify-between items-center text-primary dark:text-white dark:bg-transparent">
          {/* Section Logo */}
          <div className="flex items-center gap-3">
            <img
              src={isDarkmode ? logoPrimary : logoDark}
              alt="Logo"
              className="h-16 md:h-20 transition-all"
            />
            <p className="text-xl md:text-2xl">
              <span className="text-2xl md:text-4xl ">Tenders </span>
            </p>
          </div>

          {/* Section Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex justify-center items-center">
              {navLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="px-2 font-semibold transition-all duration-200 "
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="py-4">
                <Link
                  to="/SignIn"
                  className="p-2 font-semibold transition-all duration-200 dark:border-white"
                >
                  Sign In
                </Link>
              </li>
              <li className="py-4">
                <Link
                  to="/SignUp"
                  className="mx-2 p-2 font-semibold transition-all duration-200 dark:border-white"
                >
                  Sign Up
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
        className={`md:hidden flex flex-col items-center bg-gray-100 dark:bg-gray-500 dark:text-white overflow-hidden transition-navbar-max-height duration-500 ease-in-out ${
          showMenu ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center w-full">
          {navLinks.map(({ id, name, link }) => (
            <li key={id} className="py-4 w-full text-center">
              <a
                href={link}
                className="w-full block py-2 transition-all duration-200 hover:text-second"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
