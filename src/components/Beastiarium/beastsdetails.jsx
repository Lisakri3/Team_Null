
import React from "react";
import { useParams } from "react-router-dom";
import { BeastData } from "../../BeastData";
import "./beastdetails.css";

function BeastDetail() {
  const { id } = useParams(); // Holen der ID aus den Routenparametern

  // Suchen Kreatur mit der entsprechenden ID
  const beast = BeastData.find((beast) => beast.id === parseInt(id));

  if (!beast) {
    return <div>Kreatur nicht gefunden</div>;
  }

  return (
    <div className="beastdetailpage">
        <div className="beastinfos">
        <h2 className="beastname">{beast.name}</h2>
      <img className ="beastpicture" src={beast.image} alt={beast.name} />
      <p className ="beastdetail">{beast.details}</p>
        </div>
      
    </div>
  );
}

export default BeastDetail;
