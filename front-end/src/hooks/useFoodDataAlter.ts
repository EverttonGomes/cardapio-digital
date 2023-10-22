import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/foodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const putData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.put(API_URL + '/food', data)
    return response;
    }

export function useFoodDataAlter(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: putData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}