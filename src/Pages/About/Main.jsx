import React from "react";
import MainTitle from "../../Components/Layout/MainTitle";
import MainLink from "../../Components/Layout/MainLink";
import MainDesc from "../../Components/Layout/MainDesc";
function Main() {
  return (
    <>
      <div className="main">
        <div className="wrapper-container">
          <MainTitle content="Who Are We." />
          <div className="container content-container">
            <MainDesc
              content="Welcome to flyZone, your ultimate destination for all your flight booking needs! Whether you're a frequent traveler or planning a long-awaited vacation, flyZone offers a seamless and user-friendly experience to help you soar to new heights.

              At flyZone, we understand that finding the perfect flight can be overwhelming. That's why our website is designed to make the process as effortless as possible. With a vast database of flights from major airlines worldwide, you can effortlessly compare prices, departure times, and travel options to secure the best deal that suits your preferences and budget.

              Our intuitive search filters allow you to customize your journey with ease. Whether you're seeking non-stop flights, specific airlines, or the most affordable fares, flyZone has got you covered. You can also conveniently browse through various cabin classes, including economy, premium economy, business, and first class, ensuring that your flight aligns perfectly with your comfort and style preferences.

              Beyond flight bookings, flyZone offers a range of additional features to enhance your travel experience. Discover exclusive hotel deals and seamlessly combine your flight and accommodation reservations to create a personalized travel package. Additionally.Additionally."
            />
            <div className="links-container">
              <MainLink link="/More-About-Us" content="Know More About Us." />
            </div>
          </div>

          <MainTitle content="Download Our Application." />
          <div className="container content-container">
            <MainDesc content="Download Our Application On Your Phone And Use It To Get More Computable And Better Experience." />
            <div className="links-container">
              <MainLink link="/Coming-Soon" content="Download For Android." />
              <MainLink link="/Coming-Soon" content="Download For IOS." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
