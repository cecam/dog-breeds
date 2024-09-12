import { fetchAllBreedsType } from "../domain/breeds.domain";

export const fetchAllBreeds: fetchAllBreedsType = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return data.message;
}


