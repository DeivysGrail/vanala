import "../css/Header.css";
import tee_shirt_femme from "../img/Buste/Tee_shirts/tee-shirt-femme.jpg";
import sweat_jaune from "../img/Sweat/sweat_jaune.jpg";
import fleche_vers_le_bas from "../img/Vanala_icon/arrow-down.svg";
import ping_pong_bg from '../img/Vanala_icon/clothes_icon/ping-pong.svg';
import {useState} from 'react';

export default function Header() {


    return (
        <div className="header">
            <div className="grid">
                <div className="photo-1">

                    <h1>Collection Ping-Pong</h1>
                </div>
                <div className="photo-2">
                    <h1>La base</h1>
                </div>
            </div>
            <div  className="fleches">
                <img className="arrow-down-svg" src={fleche_vers_le_bas} onClick={() => {
                    document.querySelector("#page2").scrollIntoView({behavior: "smooth"})
                }}/>
            </div>
        </div>
    );
}
