import React from "react";

const Player = props => {
  return (
    <div className="player" data-testid="player">
      <h2>{props.name}</h2>
      <h3>{props.country}</h3>
      <h4>Google Searches: {props.searches}</h4>
    </div>
  );
};

export default Player;