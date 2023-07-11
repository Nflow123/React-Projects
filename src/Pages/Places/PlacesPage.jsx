import React from "react";
import "./Places.css";
import InputBox from "../../Components/SearchBox/Box";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Box from "../../Components/Main/Box2";
import DubaiImg from "../../assets/places/Dubai.jpg";
import LondonImg from "../../assets/places/london.jpg";
import TajMahalImg from "../../assets/places/taj mahal.jpg";
import NewYorkImg from "../../assets/places/new york.jpg";
import AmsterdamImg from "../../assets/places/amsterdam.jpg";
import MoroccoImg from "../../assets/places/morocco.jpg";
import RomeImg from "../../assets/places/rome.jpg";
import MarrakechImg from "../../assets/places/marrakech.jpg";
import ItalyImg from "../../assets/places/Italy.jpg";
import IstanbulImg from "../../assets/places/istanbul.jpg";
import TokyoImg from "../../assets/places/Tokyo.jpg";
import BarcelonaImg from "../../assets/places/barcelona.jpg";
import Button from "../../Components/SearchBox/Button";
import searchIcon from "../../assets/search-icon.svg";
import calenderIcon from "../../assets/calender-icon.svg";
import Icon1 from "../../assets/box-icon1.svg";
import Icon2 from "../../assets/box-icon2.svg";
import Icon3 from "../../assets/box-icon3.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const places = [
  {
    Name: "London",
    Img: LondonImg,
    Desc: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times",
    Price: "8,300",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "3",
    Distance: "1500",
    to: "/London",
  },
  {
    Name: "taj mahal",
    Img: TajMahalImg,
    Desc: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India",
    Price: "16,500",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "7",
    Distance: "1000",
    to: "Taj-mahal",
  },
  {
    Name: "New York",
    Img: NewYorkImg,
    Desc: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan,",
    Price: "12,500",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "4 ",
    Distance: "1000",
    to: "New-York",
  },

  {
    Name: "Istanbul",
    Img: IstanbulImg,
    Desc: "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences",
    Price: "10,100",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "6 ",
    Distance: "1000",
    to: "Istanbul",
  },
  {
    Name: "Italy",
    Img: ItalyImg,
    Desc: "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome,",
    Price: "9,000",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "4 ",
    Distance: "1000",
    to: "Italy",
  },
  {
    Name: "Rome",
    Img: RomeImg,
    Desc: "Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome,",
    Price: "6,000",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "3 ",
    Distance: "1000",
    to: "Rome",
  },
  {
    Name: "Morocco",
    Img: MoroccoImg,
    Desc: "Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber.",
    Price: "5,000",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "7 ",
    Distance: "1000",
    to: "Morocco",
  },
  {
    Name: "Dubai",
    Img: DubaiImg,
    Desc: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene.",
    Price: "16,000",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "5 ",
    Distance: "1000",
    to: "Dubai",
  },
  {
    Name: "Tokyo",
    Img: TokyoImg,
    Desc: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
    Price: "5,000",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "7 ",
    Distance: "1000",
    to: "Tokyo",
  },
  {
    Name: "Marrakech",
    Img: MarrakechImg,
    Desc: "Marrakesh, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens.",
    Price: "5,000",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "7 ",
    Distance: "1000",
    to: "Marrakech",
  },
  {
    Name: "Barcelona",
    Img: BarcelonaImg,
    Desc: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.",
    Price: "11,000",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "5 ",
    Distance: "1000",
    to: "Barcelona",
  },
  {
    Name: "Amsterdam",
    Img: AmsterdamImg,
    Desc: "Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses",
    Price: "8,000",
    Icon1: Icon1,
    Icon2: Icon2,
    Icon3: Icon3,
    TripNights: "4 ",
    Distance: "1000",
    to: "Amsterdam",
  },
];
function PlacesPage() {
  const [locationInput, setLocationInput] = useState(
    localStorage.getItem("locationInputValue")
  );

  const [checkInDateInput, setCheckInDateInput] = useState(
    localStorage.getItem("checkInDateInputValue")
  );
  const [checkOutDateInput, setCheckOutDateInput] = useState(
    localStorage.getItem("checkOutDateInputValue")
  );
  const [functionSubmited, setFunctionSubmited] = useState(false);
  return (
    <div className="places">
      <Header />
      {/* Search Box */}
      <motion.div
        className="search-box container"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <form
          action=""
          className="wrapper"
          onSubmit={(e) => {
            e.preventDefault();
            if (locationInput === "") {
              e.target.classList.add("check");
            } else if (locationInput != "") {
              e.target.classList.remove("check");
              setFunctionSubmited(true);
            }
          }}
        >
          <InputBox
            name="place"
            label="Where You Wanna Go ?"
            icon={searchIcon}
            placeholder="Search For Location"
            type="text"
            value={locationInput}
            onChange={(e) => {
              setLocationInput(e.target.value);
              localStorage.setItem("locationInputValue", "");
              localStorage.setItem("checkInDateInputValue", "");
              localStorage.setItem("checkOutDateInputValue", "");
            }}
          />
          <InputBox
            name="checkInDate"
            label="Check-in Date !"
            icon={calenderIcon}
            type="date"
            value={checkInDateInput}
            onChange={(e) => {
              setCheckInDateInput(e.target.value);
            }}
          />
          <InputBox
            label="Check-Out Date !"
            icon={calenderIcon}
            type="date"
            name="checkOutDate"
            value={checkOutDateInput}
            onChange={(e) => {
              setCheckOutDateInput(e.target.value);
            }}
          />
          <div className="input-parent">
            <Button title="Explore" type="submit" />
          </div>
        </form>
      </motion.div>
      <main className="main" id="main">
        <div className="container box-wrapper">
          {places
            .filter((val) => {
              if (locationInput == "") {
                return val;
              } else if (
                val.Name.toLocaleLowerCase().includes(
                  locationInput.toLowerCase()
                )
              ) {
                return val;
              }
            })
            .map((card) => {
              return (
                <Box
                  title={card.Name}
                  desc={card.Desc}
                  img={card.Img}
                  icon1={card.Icon1}
                  icon2={card.Icon2}
                  icon3={card.Icon3}
                  price={card.Price}
                  distance={card.Distance}
                  tripNights={card.TripNights}
                  link={card.to}
                />
              );
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PlacesPage;
export const allPlaces = places;
