export interface DogBreeds {
    [breed: string]: string[];
}

export type fetchAllBreedsType = () => Promise<DogBreeds>;
  