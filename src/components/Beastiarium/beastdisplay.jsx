import React from "react";
import { useParams } from "react-router-dom";
import { BeastData } from "../../BeastData";

function BeastDisplay() {
  const { id } = useParams();
  return (
    <div className="listOfBeasts">
      <div className="beastDisplay">
        <h1>{BeastData[id - 1].name}</h1>{" "}
        <p>{BeastData[id - 1].description}</p>{" "}
      </div>
    </div>
  );
}

export default BeastDisplay;