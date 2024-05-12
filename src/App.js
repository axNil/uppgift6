import "./App.css";
import { MovieList } from "./components/MovieList";
import React, { useState } from "react";
import { AddMovieForm } from "./components/AddMovieForm";
import { Divider, Stack, Typography, Box } from "@mui/material";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Star Wars III", rating: 1 },
    { id: 2, title: "Star Wars XVI", rating: 3 },
    { id: 3, title: "The Room", rating: 5 },
  ]);
  const [nextId, setNextId] = useState(4);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: nextId }]);
    setNextId(nextId + 1);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4" mb={2}>
          Min filmlista
        </Typography>
        <Divider />
      </header>
      <main>
        <Box>
          <Stack display="flex" justifyContent="center" alignItems="center">
            <AddMovieForm addMovie={addMovie} />
            <Box width={{ xs: 300, sm: 500, md: 600 }}>
              <Divider />
              <MovieList movies={movies} deleteMovie={deleteMovie} />
            </Box>
          </Stack>
        </Box>
      </main>
    </div>
  );
}

export default App;
