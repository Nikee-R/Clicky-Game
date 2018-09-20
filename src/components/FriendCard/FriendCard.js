import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card"
    value={props.id}
    onClick={() => props.selectFriend(props.friend)}
    >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
