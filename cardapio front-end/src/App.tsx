import { useState } from 'react'
import './App.css'
import { Card } from './Components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './Components/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    SetIsModalOpen(prev => !prev)
  }

  return (
      <div className="container">
        <div className="title-bar"><h1>Cardápio</h1></div>
          <div className="card-grid">
            {data?.map(foodData =>
            <Card 
              title = {foodData.title} 
              price = {foodData.price} 
              image = {foodData.image} 
              />
              )}

          </div>
          {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
          <button onClick={handleOpenModal}>Novo</button>
      </div>
  )
}

export default App