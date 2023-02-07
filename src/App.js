import './App.css';
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import OurStory from "./Components/OurStory/OurStory";
import Services from "./Components/Services/Services";
import Offer from "./Components/Offer";
import Reservation from "./Components/Reservation";
import Recommended from "./Components/Recomend/Recommended";
import OurMenu from "./Components/OurMenu";
import OurBlog from "./Components/OurBlog/OurBlog";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <OurStory />
      <Services />
      <Offer />
      <Reservation />
      <Recommended />
      <OurMenu />
      <OurBlog />
      <Footer />
    </div>
  );
}

export default App;
