import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../images/stil-logo.jpg";

export const navLinks = [
  {
    id: 0,
    name: "Ponudba",
    path: "/",
  },
  {
    id: 1,
    name: "Nasveti in ideje",
    path: "/nasveti-in-ideje",
  },
  {
    id: 2,
    name: "Katalog",
    path: "/katalog",
  },
  // {
  //   id: 3,
  //   name: "O nas",
  //   path: "/info",
  // },
  {
    id: 4,
    name: "Kontakt",
    path: "/kontakt",
  },
  {
    id: 5,
    name: "Akcija",
    path: "/akcija",
  },
];

export const navIcons = [
  {
    id: 0,
    icon: <img src={logo} alt="stil" className="icon stil-icon" />,
    path: "https://gramat-gril.si/",
  },
  {
    id: 1,
    icon: <FaFacebook className="icon facebook-icon" />,
    path: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaInstagram className="icon instagram-icon" />,
    path: "https://www.instagram.com",
  },
];

export const siteLinks = [
  {
    id: 0,
    name: "Barve in fasade",
    path: "/barve-in-fasade",
  },
  {
    id: 1,
    name: "Gradnja",
    path: "/gradnja",
  },
  {
    id: 2,
    name: "Keramika in talne obloge",
    path: "/keramika-in-talne-obloge",
  },
  {
    id: 3,
    name: "Vrt in okolica",
    path: "/barve-in-fasade",
  },
  {
    id: 4,
    name: "Vse za kopalnico",
    path: "/vse-za-kopalnico",
  },
  //   {
  //     id: 5,
  //     name: "Nasveti in ideje",
  //     path: "/nasveti",
  //   },
];
