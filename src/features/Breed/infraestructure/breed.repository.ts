import { GetBreedImagesType } from "../domain/breed.domain";

export const fetchBreedImages: GetBreedImagesType = async (breed) => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    return data.message;
}

