import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../images/stil-logo.jpg";
import { types } from "../utils";

const {
  RESET_PRODUCTS,
  SHOW_PROMOTED,
  SORT_BY_PRICE_UP,
  SORT_BY_PRICE_DOWN,
  // SORT_BY_DATE_DOWN,
  SORT_BY_DISCOUNT,
} = types;

export const navLinks = [
  {
    id: 0,
    name: "Domov",
    path: "/",
  },
  {
    id: 1,
    name: "Nasveti in ideje",
    path: "/nasveti-in-ideje",
  },
  // {
  //   id: 2,
  //   name: "Katalog",
  //   path: "/katalog",
  // },
  {
    id: 4,
    name: "Kontakt",
    path: "/kontakt",
  },
  {
    id: 5,
    name: "Akcije",
    path: "/akcija",
    accent: "true",
  },
];

export const navIcons = [
  {
    id: 0,
    icon: <img src={logo} alt="stil" className="icon stil-icon" />,
    path: "https://gramat-gril.si/",
    label: "stil-link",
  },
  {
    id: 1,
    icon: <FaFacebook className="icon facebook-icon" />,
    path: "https://www.facebook.com",
    label: "facebook-link",
  },
  {
    id: 2,
    icon: <FaInstagram className="icon instagram-icon" />,
    path: "https://www.instagram.com",
    label: "instagram-link",
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
];

export const sortMenuLinks = [
  {
    id: 0,
    name: "Vsi izdelki",
    active: true,
    action: RESET_PRODUCTS,
  },
  {
    id: 1,
    name: "Najnižja cena",
    active: false,
    action: SORT_BY_PRICE_UP,
  },
  {
    id: 2,
    name: "Najvišja cena",
    active: false,
    action: SORT_BY_PRICE_DOWN,
  },
  {
    id: 3,
    name: "Promovirano",
    active: false,
    action: SHOW_PROMOTED,
  },
  // {
  //   id: 4,
  //   name: "Najnovejše",
  //   active: false,
  //   action: SORT_BY_DATE_DOWN,
  // },
  {
    id: 5,
    name: "Popust",
    active: false,
    action: SORT_BY_DISCOUNT,
  },
];
