import React from "react";
import Box from "./Box2";

import { allPlaces } from "../../Pages/Places/PlacesPage";
// Function to generate a random number within a range without repeating
function generateUniqueRandom(min, max) {
  if (min > max) {
    throw new Error("Minimum value cannot be greater than maximum value");
  }

  const usedNumbers = new Set();

  while (true) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!usedNumbers.has(random)) {
      usedNumbers.add(random);
      return random;
    }

    // Check if all numbers in the range have been used
    if (usedNumbers.size === max - min + 1) {
      throw new Error("All possible unique numbers have been generated");
    }
  }
}

// Example usage
const random1 = generateUniqueRandom(0, 5);
const random2 = generateUniqueRandom(6, 10);
const random3 = generateUniqueRandom(10, allPlaces.length - 1);

const randomPlace1 = allPlaces[random1];
const randomPlace2 = allPlaces[random2];
const randomPlace3 = allPlaces[random3];

function Container2() {
  return (
    <div className="container box-wrapper">
      <Box
        img={randomPlace1.Img}
        title={randomPlace1.Name}
        desc={randomPlace1.Desc}
        icon1={randomPlace1.Icon1}
        icon2={randomPlace1.Icon2}
        icon3={randomPlace1.Icon3}
        price={randomPlace1.Price}
        distance={randomPlace1.Distance}
        tripNights={randomPlace1.TripNights}
        link={randomPlace1.to}
      />
      <Box
        img={randomPlace2.Img}
        title={randomPlace2.Name}
        desc={randomPlace2.Desc}
        icon1={randomPlace2.Icon1}
        icon2={randomPlace2.Icon2}
        icon3={randomPlace2.Icon3}
        price={randomPlace2.Price}
        distance={randomPlace2.Distance}
        tripNights={randomPlace2.TripNights}
        link={randomPlace2.to}
      />
      <Box
        img={randomPlace3.Img}
        title={randomPlace3.Name}
        desc={randomPlace3.Desc}
        icon1={randomPlace3.Icon1}
        icon2={randomPlace3.Icon2}
        icon3={randomPlace3.Icon3}
        price={randomPlace3.Price}
        distance={randomPlace3.Distance}
        tripNights={randomPlace3.TripNights}
        link={randomPlace3.to}
      />
    </div>
  );
}

export default Container2;
