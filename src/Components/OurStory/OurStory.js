import "./OurStory.css";
import Carousel from 'react-bootstrap/Carousel';
import ImgCarrousel1 from "../../assets/OurStory/ImageCarrosel-1.png"
import ImgCarrousel2 from "../../assets/OurStory/ImgCarrosel-2.png"
import ImgCarrousel3 from "../../assets/OurStory/ImgCarrosel-3.png"
import CarrouselItem from "./CarrouselItem";

const OurStory = () => {
  const OurStoryData = [
    {id:1, img:ImgCarrousel1, desc:"Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!"},
    {id:2, img:ImgCarrousel2, desc:"Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!"},
    {id:3, img:ImgCarrousel3, desc:"Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!"},
  ]
  return(
    <div className={"OurStoryContainer"}>
      <h1 className={"OurStoryTitle"}>Our Story</h1>
      <Carousel className={"CarouselContainer"}>
        {OurStoryData.map((item) => {
        return(
          <Carousel.Item interval={4000} key={item.id}>
            <CarrouselItem carouselImg={item.img} carouselDesc={item.desc}/>
          </Carousel.Item>
        )})
        }
      </Carousel>
    </div>
  )
}; export default OurStory;