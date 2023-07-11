import React from "react";
import Container from "./Container";
import MainTitle from "../../Components/Layout/MainTitle";
import MainLink from "../../Components/Layout/MainLink";

function Main() {
  return (
    <>
      <div className="main">
        <Container
          titleContent="Know More About Us."
          descContent="Welcome to FlightZone, your ultimate destination for hassle-free flight bookings and travel experiences! We are thrilled to introduce ourselves and share our passion for all things related to air travel. At FlightZone, we believe that your journey begins the moment you book your flight, and we are here to make that experience truly exceptional.

          As avid travelers ourselves, we understand the excitement and anticipation that comes with planning a trip. Whether you're embarking on a spontaneous getaway, a well-deserved vacation, or a business trip, we know that finding the perfect flight is the first step towards an unforgettable adventure. That's why we've created FlightZone, a one-stop platform dedicated to providing you with a seamless booking experience and unmatched customer service.
          
          Why choose FlightZone? Let us tell you what sets us apart."
        />
      </div>
    </>
  );
}

export default Main;
export const positivePoints = [
  {
    title: "Extensive Flight Options:",
    desc: "Intuitive and User-Friendly Interface: We understand that the process of booking a flight can be overwhelming, with countless options to consider. That's why we've designed FlightZone with a user-friendly interface, making it easy for you to navigate, search, and book your flights effortlessly. Our intuitive platform provides you with all the necessary information.",
  },
  {
    title: "Personalized Recommendations:",
    desc: "With FlightZone, we go beyond just being a booking platform. Our intelligent algorithms take into account your preferences, travel history, and past bookings to offer personalized recommendations tailored specifically to you. We want to ensure that you discover new destinations, airlines, or travel experiences that align with your unique tastes and interests.",
  },
  {
    title: "Transparent Pricing:",
    desc: "At FlightZone, we believe in transparency. The price you see is the price you pay, with no hidden fees or unexpected surprises. We provide detailed breakdowns of fare components, taxes, and additional charges, so you can make an informed decision without any guesswork. Our goal is to build trust with our customers by offering clear and upfront pricing.",
  },
  {
    title: "Exceptional Customer Service:",
    desc: "We take pride in our dedicated customer support team, who are available 24/7 to assist you with any queries, concerns, or special requests. Whether you need assistance with rescheduling a flight, modifying your booking, or seeking travel advice, our team is here to provide you with prompt and reliable support. Your satisfaction is our top priority, and we strive to exceed your expectations at every step.",
  },
  {
    title: "Travel Inspiration and Resources:",
    desc: "We believe that travel is not just about reaching your destination but also about the journey itself. That's why we curate a blog filled with travel guides, tips, and inspiring stories to help you make the most of your trip. Whether you're seeking destination recommendations, packing hacks, or local insights, our blog is your go-to resource for all things travel-related.",
  },
];
