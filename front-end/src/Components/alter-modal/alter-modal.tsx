import { useEffect, useState } from "react"
import { useFoodDataAlter } from "../../hooks/useFoodDataAlter";
import { FoodData } from "../../interface/foodData";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps{
    closeModal(): void
}

const Input = ({ label, value, updateValue}: InputProps) => {
    return (
        <>
        <label>{label}</label>
        <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function AlterModal({ closeModal, id, title, price, image }: ModalProps & FoodData){

    const [obj_title, setTitle] = useState(title);
    const [obj_price, setPrice] = useState(price);
    const [obj_image, setImage] = useState(image);
    const { mutate, isSuccess, isLoading } = useFoodDataAlter();

    const submit = () => {

        const foodData: FoodData = {
            id: id,
            title: obj_title,
            price: obj_price,
            image: obj_image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Altere o item do cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={obj_title} updateValue={setTitle}/>
                    <Input label="price" value={obj_price} updateValue={setPrice}/>
                    <Input label="image" value={obj_image} updateValue={setImage}/>   
                </form>
                <button onClick={submit} className="button-secondary">
                    {isLoading ? 'alterando...' : 'alterar'}
                </button>
            </div>
        </div>
    )
}