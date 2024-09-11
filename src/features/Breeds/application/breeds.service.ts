import { fetchAllBreeds, fetchBreed } from "../infraestructure/breeds.repository";

export const getAllBreeds = async () => {
    const allBreeds = await fetchAllBreeds();
    return { allBreeds };
}

export const getBreed = async (breed: string) => {
    const fetchedBreed = await fetchBreed(breed);
    return fetchedBreed;
}