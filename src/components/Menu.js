import "../css/Menu.css"
import Navbar from "./Navbar"
import {useState, useEffect, createElement} from "react"
import "react-responsive-carousel/lib/styles/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"

//Image ENFANT pour carousel
import outfit_enfant_1 from "../img/Outfits/Outfit enfant/outfit-enfant-1.jpg"
import outfit_enfant_2 from "../img/Outfits/Outfit enfant/outfit-enfant-2.jpg"
import outfit_enfant_3 from "../img/Outfits/Outfit enfant/outfit-enfant-3.jpg"

// Image FEMME pour carousel
import outfit_femme_1 from "../img/Outfits/Outfit femme/outfit-femme-1.jpg"
import outfit_femme_2 from "../img/Outfits/Outfit femme/outfit-femme-2.jpg"
import outfit_femme_3 from "../img/Outfits/Outfit femme/outfit-femme-3.jpg"

// Image HOMME pour carousel
import outfit_homme_1 from "../img/Outfits/Outfit homme/outfit-homme-1.jpg"
import outfit_homme_2 from "../img/Outfits/Outfit homme/outfit-homme-2.jpg"
import outfit_homme_3 from "../img/Outfits/Outfit homme/outfit-homme-3.jpg"

import video_intro from "../img/video-vanala/intro.mp4"

export default function Menu() {


    const default_carousel_state = false

    //  Faire tourner les flèches lorsque cliqué
    useEffect(() => {
        const arrow_woman = document.querySelectorAll(" button")
        const img_carousel = document.querySelectorAll(".carousel img ")
        const li_carousel = document.querySelectorAll(".carousel .control-dots li ")
        if (arrow_woman) {
            arrow_woman.forEach((fleche) => {
                fleche.style.filter = "invert(1)"
                fleche.addEventListener('click', (event) => {
                    fleche.animate([{
                        transform: "rotateY(0)"
                    },
                        {
                            transform: "rotateY(360deg)"
                        }], {
                        duration: 700,
                        fill: "forwards"
                    })
                })
            })

        }
        if (img_carousel) {
            img_carousel.forEach((img) => {
                img.addEventListener('mouseover', () => {
                    img.animate([{opacity: 1}, {opacity: 0}], {duration: 20, fill: "forwards"})
                    arrow_woman.forEach((fleche) => {
                        fleche.style.opacity = "0"
                    })
                    li_carousel.forEach((li) => {
                        li.style.opacity = "0"
                    })
                })
                img.addEventListener('mouseout', () => {
                    img.animate([{opacity: 0}, {opacity: 1}], {duration: 20, fill: "forwards"})
                    arrow_woman.forEach((fleche) => {
                        fleche.style.opacity = "1 "
                    })
                    li_carousel.forEach((li) => {
                        li.style.opacity = "1"
                    })
                })


            })
        }
    })

    // Changer les couleurs de la barre
    useEffect(() => {
        const barre = document.querySelector(".liste-des-genres")
        const les_h1 = document.querySelectorAll(".genre-h1")
        barre.addEventListener('mouseover', (element) => {
            les_h1.forEach((elem) => {
                elem.style.transform = "rotateX(360deg)"
                elem.style.color = "black"
            })
            barre.style.background = "white"
        })
        barre.addEventListener('mouseout', (element) => {
            les_h1.forEach((elem) => {
                elem.style.transform = "rotateX(0)"
                elem.style.color = "white"
            })
            barre.style.background = "black"
        })
    })


    // Gestion du carousel affiché
    const [carousel, setCarousel] = useState(default_carousel_state)

    // Choix de la catégorie HOMME
    const liste_choix_homme = <div className="choix-homme-root ">
        <div className="choix-homme">
            <ul className={"ul-root"}>
                <li className={"li-couvre-chef"}>
                    <div className={"couvre-chef categorie"}>
                        <div className="couvre-chef-titre titre">
                            <h1>Couvre-chef</h1>
                        </div>
                        <div className="choix-haut choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Casquettes</li>
                                <li>Chapeaux</li>
                                <li>Bonnets</li>
                                <li>Bob</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-haut"}>
                    <div className={"haut categorie"}>
                        <div className="haut-titre titre">
                            <h1>Haut</h1>
                        </div>
                        <div className="haut-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Polos</li>
                                <li>Chemises</li>
                                <li>Vestes</li>
                                <li>Hoodies</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-bas"}>
                    <div className={"bas categorie"}>
                        <div className="bas-titre titre">
                            <h1>Bas</h1>
                        </div>
                        <div className="bas-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Jean</li>
                                <li>Cargo</li>
                                <li>Jogging</li>
                                <li>Short</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-chaussure"}>
                    <div className={"chaussure categorie"}>
                        <div className="chaussure-titre titre">
                            <h1>Chaussure</h1>
                        </div>
                        <div className="chaussure-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Sneakers</li>
                                <li>Bottes</li>
                                <li>Sandales</li>
                                <li>Derby</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-divers"}>
                    <div className={"divers categorie"}>
                        <div className="titre-divers titre">
                            <h1>Divers</h1>
                        </div>
                        <div className="divers-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Montres</li>
                                <li>Bijoux</li>
                                <li>Lunettes</li>
                                <li>Sacs</li>
                                <li>Outfit</li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    // Choix de la catégorie FEMME
    const liste_choix_femme = <div className="choix-femme-root ">
        <div className="choix-femme">
            <ul className={"ul-root"}>
                <li className={"li-couvre-chef"}>
                    <div className={"couvre-chef categorie"}>
                        <div className="couvre-chef-titre titre">
                            <h1>Couvre-chef</h1>
                        </div>
                        <div className="choix-haut choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Casquettes</li>
                                <li>Chapeaux</li>
                                <li>Bob</li>
                                <li>Capeline</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-haut"}>
                    <div className={"haut categorie"}>
                        <div className="haut-titre titre">
                            <h1>Haut</h1>
                        </div>
                        <div className="haut-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Robes</li>
                                <li>Chemises</li>
                                <li>Vestes</li>
                                <li>Hoodies</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-bas"}>
                    <div className={"bas categorie"}>
                        <div className="bas-titre titre">
                            <h1>Bas</h1>
                        </div>
                        <div className="bas-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Jean</li>
                                <li>Jupe</li>
                                <li>Legging</li>
                                <li>Short</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-chaussure"}>
                    <div className={"chaussure categorie"}>
                        <div className="chaussure-titre titre">
                            <h1>Chaussure</h1>
                        </div>
                        <div className="chaussure-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Sneakers</li>
                                <li>Bottes</li>
                                <li>Sandales</li>
                                <li>Talons</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-divers"}>
                    <div className={"divers categorie"}>
                        <div className="titre-divers titre">
                            <h1>Divers</h1>
                        </div>
                        <div className="divers-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Montres</li>
                                <li>Bijoux</li>
                                <li>Lunettes</li>
                                <li>Sacs</li>
                                <li>Outfit</li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    // Choix de la catégorie ENFANT
    const liste_choix_enfant = <div className="choix-enfant-root ">
        <div className="choix-enfant">
            <ul className={"ul-root"}>
                <li className={"li-couvre-chef"}>
                    <div className={"couvre-chef categorie"}>
                        <div className="couvre-chef-titre titre">
                            <h1>Couvre-chef</h1>
                        </div>
                        <div className="choix-haut choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Casquettes</li>
                                <li>Chapeaux</li>
                                <li>Bob</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-haut"}>
                    <div className={"haut categorie"}>
                        <div className="haut-titre titre">
                            <h1>Haut</h1>
                        </div>
                        <div className="haut-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Robes</li>
                                <li>Tee-shirts</li>
                                <li>Vestes</li>
                                <li>Hoodies</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-bas"}>
                    <div className={"bas categorie"}>
                        <div className="bas-titre titre">
                            <h1>Bas</h1>
                        </div>
                        <div className="bas-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Jean</li>
                                <li>Jupe</li>
                                <li>Jogging</li>
                                <li>Short</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-chaussure"}>
                    <div className={"chaussure categorie"}>
                        <div className="chaussure-titre titre">
                            <h1>Chaussure</h1>
                        </div>
                        <div className="chaussure-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Sneakers</li>
                                <li>Bottes</li>
                                <li>Sandales</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className={"li-divers"}>
                    <div className={"divers categorie"}>
                        <div className="titre-divers titre">
                            <h1>Divers</h1>
                        </div>
                        <div className="divers-choix choix-final">
                            <ul className={"choix-disponible"}>
                                <li>Bijoux</li>
                                <li>Lunettes</li>
                                <li>Sacs</li>
                                <li>Outfit</li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>


    // INFO ENFANT
    const enfant_info = [
        {
            id: 1,
            nom: "img_01",
            img: outfit_enfant_1
        }, {
            id: 2,
            nom: "img_02",
            img: outfit_enfant_2
        }, {
            id: 3,
            nom: "img_03",
            img: outfit_enfant_3
        }
    ]


    // INFO FEMME
    const femme_info = [
        {
            id: 1,
            nom: "img_01",
            img: outfit_femme_1
        }, {
            id: 2,
            nom: "img_02",
            img: outfit_femme_2
        }, {
            id: 3,
            nom: "img_03",
            img: outfit_femme_3
        }
    ]


    // INFO HOMME
    const homme_info = [
        {
            id: 1,
            nom: "img_01",
            img: outfit_homme_1
        }, {
            id: 2,
            nom: "img_02",
            img: outfit_homme_2
        }, {
            id: 3,
            nom: "img_03",
            img: outfit_homme_3
        }
    ]


    // Carousel enfant
    const carousel_enfant = <div className={"div-carousel-enfant"}>
        <button className={"close-carousel"} onClick={() => setCarousel(default_carousel_state)}>FERMER LE CAROUSEL
        </button>
        <Carousel classname={"carousel-enfant"}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}>
            {enfant_info.map((img) => (
                <div className={"div-de-la-photo"}>
                    <img className={"img-enfant"} style={{width: "20vw"}} alt={""} src={img.img}/>
                </div>
            ))}
        </Carousel>

    </div>

    // Carousel femme
    const carousel_femme = <div className={"div-carousel-femme"}>
        <button className={"close-carousel"} onClick={() => setCarousel(default_carousel_state)}>FERMER LE CAROUSEL
        </button>
        <Carousel classname={"carousel-enfant"}
                  infiniteLoop={true}
                  showStatus={false}
                  showThumbs={false}
                  autoPlay={true}>
            {femme_info.map((img) => (
                <div className={"div-de-la-photo"}>
                    <img id={"img-carousel-femme"} className={"img-femme"} style={{width: "20vw"}} alt={""}
                         src={img.img}/>
                </div>
            ))}
        </Carousel>

    </div>

    // Carousel homme
    const carousel_homme = <div className={"div-carousel-homme"}>
        <button className={"close-carousel"} onClick={() => setCarousel(default_carousel_state)}>FERMER LE CAROUSEL
        </button>
        <Carousel classname={"carousel-enfant"}
                  infiniteLoop={true}
                  showStatus={false}
                  showThumbs={false}
                  autoPlay={true}>
            {homme_info.map((img) => (
                <div className={"div-de-la-photo"}>
                    <img id={"img-carousel-homme"} className={"img-homme"} style={{width: "20vw"}} alt={""}
                         src={img.img}/>
                </div>
            ))}
        </Carousel>

    </div>

    // render
    return <div id={"page2"} style={{scrollSnapAlign: "start", height: "100vh"}} className="Menu">
        <Navbar/>

        <div className="choix-du-genre">
            <ul className={"liste-des-genres"}>
                <li>
                    <div className="homme">
                        <div className="sexe">
                            <h1 className={"genre-h1"} id={"homme-h1"}
                                onClick={() => setCarousel(carousel_homme)}>Homme</h1>
                        </div>
                        <div className="to-display to-display-homme">
                            {liste_choix_homme}
                        </div>
                    </div>
                </li>
                <li>
                    <div className="femme">
                        <div className="sexe">
                            <h1 className={"genre-h1"} id={"femme-h1"}
                                onClick={() => setCarousel(carousel_femme)}>Femme</h1>
                        </div>
                        <div className="to-display to-display-femme">
                            {liste_choix_femme}
                        </div>
                    </div>
                </li>
                <li>
                    <div className="enfant">
                        <div className="sexe">
                            <h1 className={"genre-h1"} id={"enfant-h1"}
                                onClick={() => setCarousel(carousel_enfant)}>Enfant</h1>
                        </div>
                        <div className="to-display to-display-enfant">
                            {liste_choix_enfant}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="carousel-actif">
            {carousel}
            <div className="video-intro">
                <video className={carousel ? "video-hidden" : "video-visible"} autoPlay={true} muted={true} loop={true}>
                    <source src={video_intro}/>
                </video>
            </div>
        </div>

    </div>

}