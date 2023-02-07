import "./Offer.css"
import BtnBase from "./Buttons/Btn-Base";
import OfferImg from "../assets/OfferImg.png"
const Offer = () => {
  return(
    <div className={"OfferContainer"}>
      <h1 className={"OfferTitle"}>Offer</h1>

      <div className={"OfferContent"}>

        <div className={"OfferLeft"}>
          <h1 className={"OfferLeftTitle"}>Up To 50% Off</h1>
          <p className={"OfferDesc"}>At our cafe, we take pride in providing our customers with the best coffee around. Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, ensuring that each cup is unrivaled in flavor and freshness.</p>
          <div className={"OfferBtnSec"}>
            <BtnBase BtnText={"Learn More"} className={"BtnHero"}/>
          </div>
        </div>

        <div className={"OfferRight"}>
          <img src={OfferImg} alt="Offer" className={"OfferImg"}/>
        </div>
      </div>
    </div>
  )
};export default Offer;