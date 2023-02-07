import "./OurBlog.css"
import BlogCard from "./BlogCard";
import Carousel from 'react-bootstrap/Carousel';
import CoffeCard1 from "../../assets/OurBlog/CoffeCard1.png"
import CoffeCard2 from "../../assets/OurBlog/CoffeCard2.png"
import CoffeCard3 from "../../assets/OurBlog/CoffeCard3.png"
import CardCoffe2One from "../../assets/OurBlog/CardCoffe2-1.png"
import CardCoffe2Two from "../../assets/OurBlog/CardCoffe2-2.png"
import CardCoffe2Three from "../../assets/OurBlog/CardCoffe2-3.png"
import CardEggs1 from "../../assets/OurBlog/CardEggs1.png"
import CardEggs2 from "../../assets/OurBlog/CardEggs2.png"
import CardEggs3 from "../../assets/OurBlog/CardEggs3.png"

const OurBlog = () => {
  const blogCards = [
    {id:1 , Title:"How To Make A Great Coffee", Desc:"Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press, mug or other vessel. Next, measure out 2 tablespoons of ground coffee per 8 ounces of water. If you're using a French press, pour the measured grounds into the bottom of the press followed by hot water (between 195-205 degrees Fahrenheit). Let sit for three minutes before gently pushing down on the filter to trap the grounds at the bottom; this will create an intense flavor with slightly heavier body than filtered methods. If you have neither a French press nor filter, just pour your measured grounds directly into a mug or vessel and top with piping hot water. Give it a stir and let it sit for 3-4 minutes before consuming--but don't leave it too long as this method won't produce quite as bold of a flavor as either filtering or pressing would!",Img1:CoffeCard1 , Img2:CoffeCard2 , Img3:CoffeCard3 },
    {id:2 , Title:"Why Does Caffeine Make Us Stay Awake?", Desc:"Caffeine works by blocking adenosine receptors in the brain, which facilitates energy production and makes us feel more alert. Caffeine also increases adrenaline levels, further boosting your energy and heart rate, as well as other hormones like dopamine that can make you feel more awake. The combination of these effects makes caffeine a stimulant that is all-too common in both food and drinks to give us an extra boost of energy when we need it most. It's no wonder why so many people rely on caffeinated beverages - it really can make us stay awake!",Img1:CardCoffe2One , Img2:CardCoffe2Two , Img3:CardCoffe2Three },
    {id:3 , Title:"Different Types Of Coffee Explained", Desc:"Coffee is a staple in the lives of many and comes in a variety of forms. Whether you prefer hot or iced, espresso-based or filter, you’re spoilt for choice. To help beginners navigate their first foray into the world of coffee, let’s breakdown some basic categories: Espresso is an especially intense type of brewed coffee made by forcing pressurized water through finely ground beans. It has a strong flavor and can be used to make all manner of delicious drinks like flat whites, cappuccinos and lattes. Filter coffee is made with a paper filter that holds back most grounds before allowing the liquid to drip down into your cup. Its taste is less intense than that of espresso but still robust enough to serve with milk or flavored syrups if desired. Cold brew on the other hand isn't actually brewed using heat but rather steeped in cold water overnight to produce a...",Img1:CardEggs1, Img2:CardEggs2, Img3:CardEggs3 },
  ]
  return(
    <div className={"OurBlogContainer"}>
      <h1 className={"OurBlogTitle"}> Our Blog</h1>
      <div className={"OurBlogContent"}>
        <Carousel>
          {blogCards.map((blogCard) => (
            <Carousel.Item interval={4000}>
              <BlogCard key={blogCard.id} Title={blogCard.Title} Desc={blogCard.Desc} Img1={blogCard.Img1} Img2={blogCard.Img2} Img3={blogCard.Img3} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

    </div>
  )
};export default OurBlog;