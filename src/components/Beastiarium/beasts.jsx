import React from "react";
import { BeastData } from "../../BeastData";
import { useNavigate } from "react-router-dom";
import "./beasts.css";

function Beasts() {
  const navigate = useNavigate();
  return (
    <div className="listOfBeasts" style={{ paddingTop: '40px' }}>
      <div className="beastList">
        {BeastData.map((beast) => {
          return (
            <div
              key={beast.id}
              className="beastsDisplay"
              onClick={() => navigate(`/Beasts/${beast.id}`)}
              
            >
              <img src={beast.image} alt={beast.name} className="beastImage" />
              <div className="beastDescription">
                <h1 style={{ marginBottom: '-10px', fontSize: '28px' }}>{beast.name}</h1>
                <p style={{ fontSize: '19px' }}>{beast.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default Beasts;