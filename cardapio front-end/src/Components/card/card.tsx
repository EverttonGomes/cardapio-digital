import "./card.css"

interface cardProps{
    title: string,
    price: number,
    image: string
}
export function Card({ title, price, image} : cardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor</b>: {price}</p>
        </div>

    )
}