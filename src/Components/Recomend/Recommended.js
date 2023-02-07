import "./Recommended.css"
import RecommendedCard from "./RecommendedCard";
import Arabica from "../../assets/Recommended/Arabica.png"
import HouseBlend from "../../assets/Recommended/HouseBlend.png"
import Robusta from "../../assets/Recommended/Robusta.png"


const Recommended = () => {
  const RecommendedData = [
    {id:1, name:"Arabica", type:"Dark Roast", img:Arabica},
    {id:2, name:"House Blend", type:"Dark Roast", img:HouseBlend},
    {id:3, name:"Robusta", type:"Dark Roast", img:Robusta},
  ]
  return(
    <div className={"RecommendedContainer"}>
      <h1 className={"RecommendedTitle"}>Recommended</h1>
      <div className={"RecommendedContent"}>
        {RecommendedData.map((item) => {
          return(
            <RecommendedCard
              key={item.id}
              Name={item.name}
              Type={item.type}
              Img={item.img}
            />
          )
        })}
      </div>
    </div>
  )
};export default Recommended