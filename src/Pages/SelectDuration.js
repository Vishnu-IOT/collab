import { useNavigate } from "react-router-dom";
import "./RasiStyles.css";

export default function SelectDuration() {
  const navigate = useNavigate();

  function selectDuration(type) {
    navigate(`/rasi-list?duration=${type}`);
  }
 

  return (
    <div className="stars">
      <div className="star-bg"></div>

      <div className="rasi-container" id="rasi-container">
        <h2>ராசிபலன்</h2>

        <div className="wrap">
          <button onClick={() => selectDuration("daily")}>Daily</button>
          <button onClick={() => selectDuration("weekly")}>Weekly</button>
          <button onClick={() => selectDuration("monthly")}>Monthly</button>
          <button onClick={() => selectDuration("yearly")}>Yearly</button>
        </div>
      </div>

      

    </div>
  );
}
