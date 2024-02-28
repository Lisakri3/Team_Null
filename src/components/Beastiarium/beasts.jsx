import React from "react";
import { BeastData } from "../../BeastData";
import { useNavigate } from "react-router-dom";

function Beasts() {
  const navigate = useNavigate();
  return (
    <div className="listOfBeasts">
      <div className="beastList">
        {BeastData.map((beast) => {
          return (
            <div
              className="beastsDisplay"
              onClick={() => {
                navigate(`/Beasts/${beast.id}`);
              }}
            >
              <h1>{beast.name}</h1> <p>{beast.description}</p>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Beasts;