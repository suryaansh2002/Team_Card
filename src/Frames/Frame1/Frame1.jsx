import React from "react";
import Card from "./Card";
import "./Frame1.css";
import im1 from "./Assets/im1.png";
import im2 from "./Assets/im2.png";
import im3 from "./Assets/im3.png";
import im4 from "./Assets/im4.png";
import im5 from "./Assets/im5.png";

export default function Frame1() {
  return (
    <div className="frame1_box">
      <Card
        img={im1}
        color={1}
        title={"ENS Linked"}
        subtitle={"ENS Linked"}
        username={"dingaling.eth"}
        value={1.82}
        time={"2 months"}
        xp={200}
      />
      <Card
        img={im2}
        color={2}
        title={"Best Flip"}
        subtitle={"Sold"}
        username={"CryptoPunk #2131"}
        value={98.5}
        time={"10 days"}
        xp={150}
      />
      <Card
        img={im3}
        color={3}
        title={"Should have..."}
        subtitle={"Mint"}
        username={"Rare Apepe #6974"}
        value={98.5}
        time={"10 days"}
        xp={200}
      />
      <Card
        img={im4}
        color={1}
        title={"First NFT bought"}
        subtitle={"Bought"}
        username={"BAYC #7925"}
        value={98.5}
        time={"10 days"}
        xp={10}
      />
      <Card
        img={im5}
        color={3}
        title={"Paper Handed"}
        subtitle={"Sold"}
        username={"Moonbird #7866"}
        value={98.5}
        time={"10 days"}
        xp={200}
      />
    </div>
  );
}
