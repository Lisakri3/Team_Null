import React, { useState } from 'react';
import diceroll from "../assets/diceroll.gif";
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from "../assets/dice6.png";
import './dicegame.css';

function Dicegame() {
  const [player1, setPlayer1] = useState("Spieler*in 1");
  const [player2, setPlayer2] = useState("Spieler*in 2");
  const [result, setResult] = useState("");
  const [diceImage1, setDiceImage1] = useState(dice6);
  const [diceImage2, setDiceImage2] = useState(dice6);

  const editNames = () => {
    const newPlayer1 = prompt("Ändere hier den Namen von Spieler*in 1");
    const newPlayer2 = prompt("Ändere hier den Namen von Spieler*in 2");

    if (!newPlayer1 || !newPlayer2) {
      alert('Bitte gib einen validen Namen ein');
      return;
    }
    setPlayer1(newPlayer1);
    setPlayer2(newPlayer2);
  };

  const rollTheDice = () => {
    setDiceImage1(diceroll);
    setDiceImage2(diceroll);

    setResult("");

    setTimeout(() => {
      const randomNumber1 = Math.floor(Math.random() * 6) + 1;
      const randomNumber2 = Math.floor(Math.random() * 6) + 1;

      setDiceImage1(getDiceImage(randomNumber1));
      setDiceImage2(getDiceImage(randomNumber2));

      if (randomNumber1 === randomNumber2) {
        setResult("Gleichstand!");
      } else if (randomNumber1 < randomNumber2) {
        setResult(`${player2} hat gewonnen!`);
      } else {
        setResult(`${player1} hat gewonnen!`);
      }
    }, 2500);
  };

  const getDiceImage = (number) => {
    switch (number) {
      case 1:
        return dice1;
      case 2:
        return dice2;
      case 3:
        return dice3;
      case 4:
        return dice4;
      case 5:
        return dice5;
      case 6:
        return dice6;
      default:
        return dice1;
    }
  };

  return (
    
<div className="dicegamecontainer">
      <h1 className="title">- Das Würfelspiel in der Taverne -</h1>
      <h1 className="result">{result}</h1>
<div className="twoDices">
      <div className="dice">
        <p className="Player1">{player1}</p>
        <img src={diceImage1} alt="dice 6" className="img1" />
      </div>
      <div className="dice">
        <p className="Player2">{player2}</p>
        <img src={diceImage2} alt="dice 6" className="img2" />
      </div>
</div>
      

      <div className="containerbottom">
        <button type="button" className="btn" onClick={rollTheDice}>
          Würfeln
        </button>
      </div>
      <div className="containerbottom">
        <button type="button" className="btn" onClick={editNames}>
          Namen ändern
        </button>
      </div>
    <div className="emptySpace"></div> 
    </div>
    
    
  );
}

export default Dicegame;
