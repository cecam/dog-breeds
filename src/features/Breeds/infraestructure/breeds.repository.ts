import { DogBreeds, Breed } from "../domain/breeds.domain";

export const fetchAllBreeds: () => Promise<DogBreeds> = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return data.message;
}

export const fetchBreed: (breed: string) => Promise<Breed> = async (breed: string) => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    return data.message;
}