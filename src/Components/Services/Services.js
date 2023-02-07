import "./Services.css"
import ServicesCard from "./ServicesCard";
import Equipament from "../../assets/Services/Equipament.png"
import TypeCoffe from "../../assets/Services/TypeCoffe.png"
import TakeaWay from "../../assets/Services/TakeaWay.png"
import Beans from "../../assets/Services/Beans.png"
import Pastry from "../../assets/Services/Pastry.png"


const Services = () => {
  const ServicesData = [
    {id:1, img:Equipament ,name:"Equipament"},
    {id:2, img:TypeCoffe ,name:"Type Of Coffee"},
    {id:3, img:TakeaWay ,name:"Take a Way"},
    {id:4, img:Beans ,name:"Beans Variant"},
    {id:5, img:Pastry ,name:"Pastry"},
  ]
  return(
    <div className={"ServicesContainer"}>
      <h1 className={"ServicesTitle"}>Services</h1>
      <div className={"ServicesContent"}>
        {ServicesData.map((item) => {
        return(
          <ServicesCard key={item.id} img={item.img} name={item.name}/>
        )})
        }
      </div>

    </div>
  )
}; export default Services;