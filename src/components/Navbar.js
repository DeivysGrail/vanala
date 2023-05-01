import "../css/Navbar.css"
import menu_icon from "../img/Vanala_icon/menu.svg"
import loupe_icon from "../img/Vanala_icon/loupe.svg"
import logo_vanala from "../img/Vanala_icon/logo-2.svg"
import like_icon from "../img/Vanala_icon/like.svg"
import panier_icon from "../img/Vanala_icon/panier.svg"
import user_icon from "../img/Vanala_icon/user/basic_user.svg"
import {useEffect, useState} from "react"

export default function Navbar() {


    const [triggerinterval, setTriggerInterval] = useState(true)
    useEffect(() => {                                     /*    Permet de gérer l'activation de l'interval, afin d'éviter qu'elle se lance en boucle  */

        function animateText(input_placeholder, placeholderText) { /* Fonction pour animer le texte de l'input */
            let index = 1; /*                                       Permet d'afficher 1 par 1 les lettr es en itérant dans les textes prédéfinies */
            const length = placeholderText.length;

            return new Promise((resolve, reject) => { /* Promise pour attendre que l'animation soit fini pour commencer la suivante */

                const interval = setInterval(() => {
                    input_placeholder.setAttribute("placeholder", placeholderText.slice(0, index)); /* Attribution de placeholder, la méthode slice permet de découper un texte selon les index données */
                    index++;

                    if (index > length) { /* Si l'index fait la taille du texte */
                        clearInterval(interval);
                        resolve(); /* On passe à la suite */
                    }
                }, 20);
            });
        }

        if (triggerinterval === true) {
            startInterval();                        /* Lancement de la fonction pour activer le changement de placeholder */
            setTriggerInterval(false)
        }

        let count = 0
        function startInterval() {
            let trigger = 1;
            let promise = Promise.resolve();
            const interval_de_base = setInterval(() => { /* Ici, c'est toute la partie gestion de l'interval qui permet de changer le placeholder */
                const input_placeholder = document.querySelector(".search-div input");

                switch (trigger) { /* En fonction de la valeur de 'trigger', le placeholder change. À chaque condition, trigger est modifié pour faire
                                                                                                        un effet en chain
                */

                    case 1:                             /*   Dans le cas où trigger est égale à 1*/
                        promise = promise.then(() => {  /*             Lorsqu'une promesse est éffectué,*/
                            return animateText(input_placeholder, "Vestes"); /* On active l'animation avec le texte souhaité*/
                        });
                        trigger += 1;/*                                      On incrémente trigger */
                        break;                                  /*           Fin de la condition                */
                    case 2:
                        promise = promise.then(() => {
                            return animateText(input_placeholder, "Outfits");
                        });
                        trigger += 1;
                        break;
                    case 3:
                        promise = promise.then(() => {
                            return animateText(input_placeholder, "Casquettes");
                        });
                        trigger += 1;
                        break;
                    case 4:
                        promise = promise.then(() => {
                            return animateText(input_placeholder, "Montres");
                        });
                        trigger += 1;
                        break;
                    case 5:
                        promise = promise.then(() => {
                            return animateText(input_placeholder, "Boucles d'oreilles");
                        });
                        trigger += 1;
                        break;
                    case 6:
                        promise = promise.then(() => {
                            return animateText(input_placeholder, "Chaussures");
                        });
                        trigger += 1;
                        break;
                    case 7:
                        promise = promise.then(() => {
                            return animateText(input_placeholder, "Sac");
                        });
                        trigger += 1;
                        break;
                    case 8:
                        if (count < 1   ) {
                            clearInterval(interval_de_base)
                            count++
                            return animateText(input_placeholder, "On a tout ce qu'il vous faut !")
                                .then(() => {
                                    setTimeout(() => startInterval(), 1000)
                                })

                        } else{
                            clearInterval(interval_de_base);
                            return animateText(input_placeholder, "On a tout ce qu'il vous faut !")
                                .then(() => {
                                    setTimeout(() => {
                                        return animateText(input_placeholder, "De quoi as tu besoin ?")
                                    }, 1000)
                                })
                            break;


                        }
                }
            }, 1000);
        }


    })


    return <div className="navbar navbar-entry">
        <ul>
            <li className="menu-burger">
                <div>
                    <img src={menu_icon}/>
                </div>
            </li>
            <li className={"search"}>
                <div className={"search-div"}>
                    <input type="text" placeholder={"Que veux-tu ?"}/>
                    <img src={loupe_icon}/>
                </div>
            </li>
            <li className="logo">
                <div className={"logo-div"}>
                    <img src={logo_vanala}/>
                </div>
            </li>
            <li className="trio-icon">
                <ul>

                    <li>
                        <div className="like">
                            <img src={like_icon}/>
                        </div>
                    </li>
                    <li>
                        <div className="panier">
                            <img id={"panier"} src={panier_icon}/>
                        </div>
                    </li>
                    <li>
                        <div className="panier">
                            <img src={user_icon}/>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

}