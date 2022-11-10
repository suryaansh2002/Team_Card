import React from "react";
import "./Card.css";
import icon from "./Assets/icon.png";
export default function Card(props) {
  return (
    <div className="card2">
      <img className="card2_img" src={props.img} />
      <div className="card2_time">{props.time}</div>
      <div className="card2_box">
        <div className="card2_title">{props.title}</div>
        <div className="card2_row">
          <div className="card2_row_left">Bought</div>
          <div className="card2_row_right1">
            {props.bought} <img src={icon} />
          </div>
        </div>
        <div className="card2_row">
          <div className="card2_row_left">Floor</div>
          <div className="card2_row_right1">
            {props.floor} <img src={icon} />
            <span className="card2_percent">+{props.percent}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
