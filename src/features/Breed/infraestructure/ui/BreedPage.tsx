"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getBreedImages } from "../../application/breed.service";

export const BreedPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const pathname = usePathname();
  const breed = pathname.split("/")[1].split("-")[0];
  const subBreed = pathname.split("/")[1].split("-")[1];

  useEffect(() => {
    getBreedImages(breed, subBreed).then(setImages);
  }, [breed, subBreed]);

  return (
    <>
      <div>Breed: {breed}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {images.map((image) => (
          <div
            key={image}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src={image} alt={image} width={200} height={200} />
          </div>
        ))}
      </div>
    </>
  );
};
