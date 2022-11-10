import React from "react";
import "./Frame3.css";
import logo from "./Assets/logo.png";
import tiwtter from "./Assets/twitter.png";
import web from "./Assets/web.png";
import im1 from "./Assets/im1.png";
import im2 from "./Assets/im2.png";
import im3 from "./Assets/im3.png";
import im4 from "./Assets/im4.png";
import chevron from "./Assets/chevron.png";

export default function Frame3() {
  return (
    <div className="frame3_box">
      <div className="f3_card">
        <div className="f3_header_box">
          <div className="f3_header_left">
            <img src={logo} className="f3_logo" />
            <div className="f3_level">
              <span> LVL 2 </span>
            </div>
          </div>
          <div className="f3_header_right">
            <div className="header_line1">dingaling.eth</div>
            <div className="header_line2">0xadgf....jkld</div>
          </div>
        </div>
        <div className="f3_links">
          <div className="f3_twitter">
            <img src={tiwtter} className="f3_twitter_icon" />
            <div className="f3_twitter_handle">@dingalingts</div>
          </div>
          <div className="f3_web">
            <img src={web} className="f3_web_icon" />
          </div>
        </div>
        <div className="f3_content">
          An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
          owner of 📦 @nftboxes
        </div>
        <div className="f3_communities">
          <div className="f3_communities_header">Common communties (3)</div>
          <div className="f3_communities_img_container">
            <img src={im1} className="f3_communities_img" />
            <img src={im2} className="f3_communities_img" />
            <img src={im3} className="f3_communities_img" />
            <img src={im4} className="f3_communities_img" />
          </div>
        </div>
        <div className="f3_tags">
          <div className="f3_tag">Art 12%</div>
          <div className="f3_tag">Utility 12%</div>
          <div className="f3_tag2">PFP 12%</div>
          <div className="f3_tag2">Metaverse 12%</div>
          <div className="f3_tag2">Gaming 12%</div>
          <div className="f3_tag2">PFP 12%</div>
          <div className="f3_tag2">ens 12%</div>
        </div>
        <div className="f3_subscribe">
          <div className="f3_subscribe_text">
            Subscribe <img src={chevron} className="f3_subscribe_cheveron" />
          </div>
        </div>
      </div>
    </div>
  );
}
