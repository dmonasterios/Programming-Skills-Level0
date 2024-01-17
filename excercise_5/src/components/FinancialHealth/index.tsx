import happyFace2 from "../../assets/happy-face-2.svg";
import happyFace1 from "../../assets/happy-face-1.svg";
import normalFace from "../../assets/normal-face.svg";
import sadFace1 from "../../assets/sad-face-1.svg";
import sadFace2 from "../../assets/sad-face-2.svg";
import useFinancialState from "../../hooks/useFinancialState";
import calculateFinancialHealth from "../../utils/calculateFinancialHealth";
import "./FinancialHealth.css"

const faces = {
  'happy-2':happyFace2,
  'happy-1':happyFace1,
  'normal':normalFace,
  'sad-1':sadFace1,
  'sad-2':sadFace2
}


const FinancialHealth = () => {
  const {financialState} = useFinancialState();

  const response = calculateFinancialHealth(financialState);
  const seletedFace = faces[response.status];
  const seletedMessage = response.msj;
  return(
    <div className="health health--bad">
      <h3 className="health__title">Finantial State</h3>
      <img className="health__icon" src={seletedFace} alt="face" />
      <p className="health__paragraph">{seletedMessage}</p>
    </div>
  );
}

export default FinancialHealth;