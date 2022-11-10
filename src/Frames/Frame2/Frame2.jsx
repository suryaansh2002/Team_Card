import React from "react";
import Card from "./Card";
import "./Frame2.css";
import im1 from "./Assets/im1.png";
import im2 from "./Assets/im2.png";
import im3 from "./Assets/im3.png";
import im4 from "./Assets/im4.png";
import im5 from "./Assets/im5.png";

export default function Frame2() {
  return (
    <div className="frame2_box">
      <Card
        img={im1}
        title={"Azuki #9839"}
        floor={12.74}
        bought={"02.28"}
        time={"3 Months"}
        percent={21.6}
      />
      <Card
        img={im2}
        title={"MAYC #9839"}
        floor={12.74}
        bought={"02.28"}
        time={"3 Months"}
        percent={21.6}
      />
      <Card
        img={im3}
        title={"MoonBirds #9839"}
        floor={12.74}
        bought={"02.28"}
        time={"3 Months"}
        percent={21.6}
      />
      <Card
        img={im4}
        title={"Otherdeed #9839"}
        floor={12.74}
        bought={"02.28"}
        time={"3 Months"}
        percent={21.6}
      />
      <Card
        img={im5}
        title={"Cryptoz #9839"}
        floor={12.74}
        bought={"02.28"}
        time={"3 Months"}
        percent={21.6}
      />
    </div>
  );
}
