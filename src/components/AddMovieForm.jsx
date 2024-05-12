import React, { useState } from "react";
import {
  Button,
  TextField,
  Rating,
  Stack,
  Box,
  Typography,
  Alert,
} from "@mui/material";

export const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(null);
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && rating !== null) {
      addMovie({ title, rating: parseInt(rating) });
      setTitle(""); // Reset title
      setRating(null); // Reset rating
      setInputError(false); // Hide error
    } else setInputError(true); // Show error
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      mb={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={{ xs: 300, sm: 400, md: 400 }}
      gap={1}
    >
      <Typography>Lägg till en film</Typography>
      <TextField
        label="Titel*"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoComplete="off"
        fullWidth
      />
      <Box display="flex" alignItems="center" gap={1}>
        <Typography component="legend">Betyg: </Typography>
        <Rating
          defaultValue={null}
          size="large"
          value={rating}
          onChange={(e, newValue) => setRating(newValue)}
        />
      </Box>

      <Button type="submit" variant="contained">
        Spara film
      </Button>
      {inputError && (
        <Alert variant="outlined" severity="error">
          Du måste lägga till både titel och betyg.
        </Alert>
      )}
    </Stack>
  );
};
