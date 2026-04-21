import { useEffect, useState } from "react";
import { API } from "./api";

function History() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    API.get("/games").then(res => setGames(res.data));
  }, []);

  return (
    <div>
      <h1>Game History</h1>

      {games.map((g, i) => (
        <div key={i} style={{ border: "1px solid", margin: 10 }}>
          <h3>{g.player1} vs {g.player2}</h3>
          <p>Winner: {g.winner}</p>
          <ul>
            {g.rounds.map((r, idx) => (
              <li key={idx}>
                {r.p1Choice} vs {r.p2Choice} → {r.winner}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default History;