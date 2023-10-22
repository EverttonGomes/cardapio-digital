import axios from "axios"

const API_URL = 'http://localhost:8080';

const deleteData = async (id: Number) => {
    axios.delete(`${API_URL}/food?id=${id}`)
        .then(() => {
    window.location.reload();
  })
}

export function useFoodDataDelete(id: Number){
    console.log("DELETANDO " + id)
    deleteData(id);
}