import { useState } from "react";
import { API } from "./api";
import { useNavigate } from "react-router-dom";

const choices = ["stone", "paper", "scissors"];

function Game() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [rounds, setRounds] = useState([]);
  const [round, setRound] = useState(1);

  const navigate = useNavigate();

  const getWinner = (p1, p2) => {
    if (p1 === p2) return "Tie";
    if (
      (p1 === "stone" && p2 === "scissors") ||
      (p1 === "scissors" && p2 === "paper") ||
      (p1 === "paper" && p2 === "stone")
    ) {
      return player1;
    }
    return player2;
  };

  const playRound = () => {
    const p1 = choices[Math.floor(Math.random() * 3)];
    const p2 = choices[Math.floor(Math.random() * 3)];

    const winner = getWinner(p1, p2);

    const newRound = { p1Choice: p1, p2Choice: p2, winner };

    setRounds([...rounds, newRound]);
    setRound(round + 1);
  };

  const finishGame = async () => {
    let p1Score = rounds.filter(r => r.winner === player1).length;
    let p2Score = rounds.filter(r => r.winner === player2).length;

    let winner =
      p1Score > p2Score ? player1 :
      p2Score > p1Score ? player2 : "Tie";

    await API.post("/games", {
      player1,
      player2,
      rounds,
      winner,
    });

    alert("Game Saved!");
    navigate("/history");
  };

  return (
    <div>
      <h1>Stone Paper Scissors</h1>

      {!player1 && (
        <>
          <input placeholder="Player 1" onChange={e => setPlayer1(e.target.value)} />
          <input placeholder="Player 2" onChange={e => setPlayer2(e.target.value)} />
        </>
      )}

      <h2>Round {round}/6</h2>

      {round <= 6 && <button onClick={playRound}>Play Round</button>}

      {round > 6 && <button onClick={finishGame}>Finish Game</button>}

      <ul>
        {rounds.map((r, i) => (
          <li key={i}>
            {r.p1Choice} vs {r.p2Choice} → {r.winner}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Game;