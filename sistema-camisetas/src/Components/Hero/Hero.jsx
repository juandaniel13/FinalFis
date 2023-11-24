import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/img/wave_hero.png";
import arrow_icon from "../assets/nav_bar_media/logo.jpg";
import hero_image from "../../assets/img/hero_img2.avif";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NUEVOS DISEÑOS</h2>
        <div>
        <div className="hand-hand-icon">
            <img src={hand_icon} alt="" height={80} width={80}></img>
          </div>
          <p>Personaliza</p>
          <p>Tus camisetas</p>
          <p>A tu gusto</p>
        </div>
        <div className="hero-latest-btn">
          <div>última colección</div>
          {/* <img src={arrow_icon} alt="" /> */}
        </div>
      </div>
      <div className="hero-right">
        <img src="https://weworkin.com/cdn/shop/files/KT_LAZKILLS-BK_6770SQ-W.jpg?v=1687804844" height={1010} alt="" />
      </div>
    </div>
  );
}

export default Hero;
