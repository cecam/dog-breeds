import { fetchBreedImages } from "../infraestructure/breed.repository";
import { GetBreedImagesType } from "../domain/breed.domain";


export const getBreedImages: GetBreedImagesType = async (breed, subBreed = "") => {
    const images = await fetchBreedImages(subBreed ? `${breed}/${subBreed}` : breed);
    return images;
}