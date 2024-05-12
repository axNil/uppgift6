import { List, Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { MovieListItem } from "./MovieListItem";
import React, { useState, useMemo } from "react";

export const MovieList = ({ movies, deleteMovie }) => {
  const [sortType, setSortType] = useState("title");

  const sortedMovies = useMemo(() => {
    return [...movies].sort((a, b) => {
      if (sortType === "title") {
        return a.title.localeCompare(b.title);
      } else {
        // sort by rating, highest rating first
        return b.rating - a.rating;
      }
    });
  }, [movies, sortType]);

  const handleSortChange = (event, newSortType) => {
    if (newSortType !== null) {
      setSortType(newSortType);
    }
  };

  return (
    <Box mt={2}>
      <ToggleButtonGroup
        value={sortType}
        exclusive
        onChange={handleSortChange}
        color="primary"
        size="small"
      >
        <ToggleButton value="title">Alfabetisk ordning</ToggleButton>
        <ToggleButton value="rating">Betygsordning</ToggleButton>
      </ToggleButtonGroup>

      <List>
        {sortedMovies.map((movie) => (
          <MovieListItem
            key={movie.id}
            data={movie}
            onDelete={() => deleteMovie(movie.id)}
          />
        ))}
      </List>
    </Box>
  );
};
