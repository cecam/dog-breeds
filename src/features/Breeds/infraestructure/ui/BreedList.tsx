"use client";

import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PetsIcon from "@mui/icons-material/Pets";
import StarBorder from "@mui/icons-material/StarBorder";
import { DogBreeds } from "../../domain/breeds.domain";
import Link from "next/link";

interface BreedsListProps {
  allBreeds: DogBreeds;
}

export const BreedsList: React.FC<BreedsListProps> = ({ allBreeds }) => {
  const [openBreeds, setOpenBreeds] = useState<{ [key: string]: boolean }>({});

  const handleClick = (breed: string) => {
    setOpenBreeds((prevOpenBreeds) => ({
      ...prevOpenBreeds,
      [breed]: !prevOpenBreeds[breed],
    }));
  };

  const breedsKeys = Object.keys(allBreeds);

  return (
    <List
      sx={{ width: "100%" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {breedsKeys.map((breed) => (
        <div key={breed}>
          <ListItemButton onClick={() => handleClick(breed)}>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary={breed} />
            {allBreeds[breed].length > 0 ? (
              openBreeds[breed] ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )
            ) : null}
          </ListItemButton>
          {allBreeds[breed].length > 0 && (
            <Collapse in={openBreeds[breed]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {allBreeds[breed].map((subBreed) => (
                  <ListItemButton key={subBreed} sx={{ pl: 4 }}>
                    <Link href={`/${breed}-${subBreed}`}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={subBreed} />
                    </Link>
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </div>
      ))}
    </List>
  );
};
