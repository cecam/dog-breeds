import { getAllBreeds } from "../../application/breeds.service";
import { BreedsList } from "./BreedList";

export const BreedsPage = async () => {
  const { allBreeds } = await getAllBreeds();
  console.log(JSON.stringify(allBreeds, null, 2));

  return (
    <div>
      BreedsPage
      <BreedsList allBreeds={allBreeds} />
    </div>
  );
};
