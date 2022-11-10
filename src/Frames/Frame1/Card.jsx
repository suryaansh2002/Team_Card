import React from "react";
import "./Card.css";
import icon from "./Assets/icon.png";
export default function Card(props) {
  return (
    <div className="card1">
      <div className={`card1_bg bg_${props.color}`}></div>
      <div>
        <img className="card1_img" src={props.img}></img>
        <div className="card1_header">
          <div className="card1_title">{props.title}</div>
          <div className={`card1_subtitle c_${props.color}`}>
            {props.subtitle}
          </div>
        </div>
        <div className="card1_lower">
          <div className="card1_lower_row">
            <div className="card1_lower_row_left">{props.username}</div>
            <div className="card1_lower_row_right">
              {props.value} <img src={icon} className="card1_icon" />
            </div>
          </div>
          <div className="card1_lower_row">
            <div className="card1_lower_row2_left">{props.time} ago</div>
            <div className="card1_lower_row2_right">+{props.xp}XP</div>
          </div>
        </div>
      </div>
    </div>
  );
}
