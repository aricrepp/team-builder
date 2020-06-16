import React, {useState} from "react";
import {Link} from 'react-router-dom';

const TeamCard = props => {

  const [team, setTeam] = useState(props)

  const saveTeam = () => {
      const onMove = props.onMove;
      onMove(team);
    }

  return (
    <div className="card-list">
      {props.cards.map(card => (
        <div className="card" key={card.id}>
          <img src={card.url}></img>
          <h2>{card.name}</h2>
          <p>{card.email}</p>
          <p>{card.role}</p>
          <Link onClick={saveTeam}>
            <div className="home-button">Add to Team</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;