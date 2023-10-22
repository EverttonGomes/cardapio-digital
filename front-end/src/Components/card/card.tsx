import "./card.css"
import { useState } from 'react'
import { AlterModal } from './../../Components/alter-modal/alter-modal';
import { useFoodDataDelete } from './../../hooks/useFoodDataDelete'

interface cardProps{
    id: number,
    title: string,
    price: number,
    image: string
}
export function Card({id, title, price, image} : cardProps){
    const [isModalOpen, SetIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        SetIsModalOpen(prev => !prev)
    }
    

    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor</b>: {price}</p>
            <div>
                {isModalOpen && <AlterModal closeModal={handleOpenModal} id={id} title={title} price={price} image={image}/> }
                <button onClick={handleOpenModal} className="alter_btn">Alterar</button>
                <button onClick={ () => useFoodDataDelete(id) } className="delete_btn">Deletar</button>
            </div>
        </div>

    )
}