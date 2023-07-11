import "./assets/css/global.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Main from "./Components/Main/Main";
import ReviewsSec from "./Components/ReviewsSec/ReviewsSec";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Landing />
      <Main />
      <ReviewsSec />
      <Footer />
    </>
  );
};

export default App;
