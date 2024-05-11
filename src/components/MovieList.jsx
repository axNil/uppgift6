import { Box, Typography, Rating, List } from "@mui/material";
export const MovieList = () => {
  return (
    <Box>
      <Typography>HEllo</Typography>
      <Rating name="read-only" value={2} readOnly />
    </Box>
  );
};
