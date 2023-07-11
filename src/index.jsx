import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/global.css";
import AboutPage from "./Pages/About/AboutPage";
import PlacesPage from "./Pages/Places/PlacesPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./Pages/Contact/ContactPage";
import MoreAboutUsPage from "./Pages/MoreAboutUs/MoreAboutUsPage";
import DubaiPage from "./Pages/CardsPages/Dubai";
import LondonPage from "./Pages/CardsPages/London";
import TokyoPage from "./Pages/CardsPages/Tokyo";
import NewYorkPage from "./Pages/CardsPages/NewYork";
import MoroccoPage from "./Pages/CardsPages/Morocco";
import IstanbulPage from "./Pages/CardsPages/Istanbul";
import ParisPage from "./Pages/CardsPages/Paris";
import TajMahalPage from "./Pages/CardsPages/TajMahal";
import ItalyPage from "./Pages/CardsPages/Italy";
import RomePage from "./Pages/CardsPages/Rome";
import MarrakechPage from "./Pages/CardsPages/Marrakech";
import BarcelonaPage from "./Pages/CardsPages/Barcelona";
import AmsterdamPage from "./Pages/CardsPages/Amsterdam";
import ComingSoonPage from "./Pages/ComingSoon/ComingSoonPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "About",
    element: <AboutPage />,
  },
  {
    path: "Places",
    element: <PlacesPage />,
  },
  {
    path: "Contact",
    element: <ContactPage />,
  },
  {
    path: "More-About-Us",
    element: <MoreAboutUsPage />,
  },
  {
    path: "Coming-Soon",
    element: <ComingSoonPage />,
  },
  {
    path: "Dubai",
    element: <DubaiPage />,
  },
  {
    path: "London",
    element: <LondonPage />,
  },
  {
    path: "Tokyo",
    element: <TokyoPage />,
  },
  {
    path: "New-York",
    element: <NewYorkPage />,
  },
  {
    path: "Morocco",
    element: <MoroccoPage />,
  },
  {
    path: "Istanbul",
    element: <IstanbulPage />,
  },
  {
    path: "Paris",
    element: <ParisPage />,
  },
  {
    path: "Taj-Mahal",
    element: <TajMahalPage />,
  },
  {
    path: "Italy",
    element: <ItalyPage />,
  },
  {
    path: "Rome",
    element: <RomePage />,
  },
  {
    path: "Marrakech",
    element: <MarrakechPage />,
  },
  {
    path: "Barcelona",
    element: <BarcelonaPage />,
  },
  {
    path: "Amsterdam",
    element: <AmsterdamPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
