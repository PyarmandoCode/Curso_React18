const data = {
    image: "https://biografieonline.it/img/bio/Bob_Dylan_6.jpg",
    cardTitle: "Bob Dylan",
    cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
        url: "https://en.wikipedia.org/wiki/Bob_Dylan",
        label: "Ir a Wiki",
    }
}

function Card() {
    return (
        <div className="card m-5">
            <img src={data.image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{data.cardTitle}</h5>
                <p className="card-text">{data.cardDescription}</p>
                <a href={data.button.url} className="btn btn-primary">{data.button.label}</a>
            </div>
        </div>
    )
}

export default Card;