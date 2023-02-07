import "./Reservation.css";
import { HiUsers } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';
import { GiSmartphone } from 'react-icons/gi';
import { AiOutlineMail} from 'react-icons/ai';
import ReservImg from "../assets/ReserveImg.png"
import BtnBase from "./Buttons/Btn-Base";

const Reservation = () => {
  return(
    <div className={"ReservationContainer"}>
      <h1 className={"ReservationTitle"}>Reserve a Table</h1>
      <div className={"ReservationContent"}>
        <div className={"ReservationLeft"}>
          <img src={ReservImg} alt={"ReservImg"} className={"ReservImg"}/>
        </div>

        <div className={"ReservationRight"}>
          <form className={"space-y-9"}>
            {/*Data*/}
            <label className={"LabelForm flex-row-reverse"} >
              <span></span>
              <input type="date"
                     name="date"
                     required
                     />
            </label>
            {/*Horario e Num */}
            <div className={"DoubleFormSec"}>
              <label className={"LabelForm"}>
                <span></span>
                <input type="time"
                       name="time"
                       />
              </label>

              <label className={"LabelForm"}>
                <span><HiUsers className={"IconsForm"}/></span>
                <select
                  name="people"
                >
                  <option value="">Guest</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
            </div>

            {/*Nome */}
            <label className={"LabelForm"}>
              <span><BiUser className={"IconsForm"}/></span>
              <input type="name"
                     name="name"
                     placeholder={"your name"}
                     />
            </label>
            {/*phone */}
            <label className={"LabelForm"}>
              <span><GiSmartphone className={"IconsForm"}/></span>
              <input type="tel"
                     name="phone"
                     placeholder={"your phone"}
                     />
            </label>

            {/*email */}
            <div className={"DoubleFormSec"}>
            <label className={"LabelForm"}>
              <span><AiOutlineMail className={"IconsForm"}/></span>
              <input type="email"
                     name="email"
                     placeholder={"your email"}
                     />
            </label>
              <BtnBase BtnText={"Reserve"} className={"BtnForm"}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}; export default Reservation;