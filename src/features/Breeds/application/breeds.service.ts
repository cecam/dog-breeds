import { fetchAllBreeds } from "../infraestructure/breeds.repository";

export const getAllBreeds = async () => {
    const allBreeds = await fetchAllBreeds();
    return { allBreeds };
}