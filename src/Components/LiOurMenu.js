import "./OurMenu.css"


const LiOurMenu = (props) =>{
  return(
    <li className={"LiMenu"}>
      <section className={"LiMenuText"}>
        <span>{props.firstText}</span> <span>{props.secondText}</span>
      </section>
      <div className={"LiBorderGradient"}>

      </div>
    </li>
  )
};export default LiOurMenu;