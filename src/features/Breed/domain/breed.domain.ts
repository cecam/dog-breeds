export type Breed = string[]; 

export type GetBreedImagesType = (breed: string, subBreed?: string) => Promise<Breed>;