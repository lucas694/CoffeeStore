import"./Btn-Base.css"

const BtnBase = (props) =>{
  return(
    <div className={"BtnBorder"}>
      <button className={props.className}>{props.BtnText}</button>
    </div>
  )
};export default BtnBase