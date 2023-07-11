import React from "react";
import "./Contact.css";
import Header from "../../Components/Header/Header";
import MainTitle from "../../Components/Layout/MainTitle";
import MainDesc from "../../Components/Layout/MainDesc";
import ContactBox from "./ContactBox";
import MainLink from "../../Components/Layout/MainLink";
import Footer from "../../Components/Footer/Footer";
import ContactPopUp from "./ContactPopUp";
function ContactPage() {
  return (
    <div className="contactPage">
      <Header />
      <main>
        <MainTitle content="Contact Us." />
        <div className="container">
          <MainDesc
            content="For Your Better Experience, We Have Good Contacting Side, You Can Contact Us Anytime 24/7.
            "
          />
        </div>
        <ContactBox />
        <ContactPopUp content="Stay Alerted, We Will Respond To You In Like 5 Hours..." />
        <div className="second">
          <MainTitle content="Something Important." />
        </div>
        <div className="container second-container">
          <MainDesc content="If There is Something Important, You Can Contact Us Using The E-mail Below. " />
          <MainLink
            content="Click Here To Move Into Our E-mail Service"
            link="/Coming-Soon"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
