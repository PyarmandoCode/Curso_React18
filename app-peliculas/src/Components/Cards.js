//Este es el compoenente que al final contendra todas las tarjetas
import React from "react";
import Card from "./Card";

import imagen1 from '../assets/pelicula1.jpg'
import imagen2 from '../assets/pelicula2.jpg'
import imagen3 from '../assets/pelicula3.jpg'

const cards = [
    {
        id: 1,
        title: "Pelicula1",
        image: imagen1
    },
    {
        id: 2,
        title: "Pelicula2",
        image: imagen2
    },
    {
        id: 3,
        title: "Pelicula3",
        image: imagen3
    },
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h100" >
            <div className="row">
                {
                    cards.map(card =>
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} image={card.image} />
                        </div>
                    )
                }



            </div>
        </div>
    )
}

export default Cards