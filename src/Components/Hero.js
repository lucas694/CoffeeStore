import "./Hero.css"
import GlowHero from "../assets/Hero/GlowHero.png"
import HeroImg from "../assets/Hero/HeroImg.png"
import BtnBase from "./Buttons/Btn-Base";
import CoffeeBeans from "../assets/Hero/Coffees.png"

const Hero = () => {
  return(
    <div className={"HeroContainer"}>
      <img src={GlowHero} alt="GlowHero" className={"GlowHero"} />
      <div className={"HeroContent"}>
        <div className={"HeroLeft"}>
          <h1 className={"HeroTitle"}>Elza Coffee</h1>
          <p className={"HeroDesc"}>Today's good mood is sponsored by coffee search for your coffee now</p>
          <div className={"HeroBtnSec"}>
            <BtnBase className={"BtnHero"} BtnText={"Shop Now"} />
            <BtnBase className={"BtnHero"} BtnText={"Catalog"} />
          </div>

        </div>
        <div className={"HeroRight"}>
          <img src={HeroImg} alt="HeroImg" className={"HeroImg"} />
          <img src={CoffeeBeans} alt="HeroImg" className={"CoffeeBeans"} />
        </div>
      </div>
    </div>
  )
};export default Hero