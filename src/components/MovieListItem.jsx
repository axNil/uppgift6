import {
  Box,
  Typography,
  Rating,
  ListItem,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export const MovieListItem = ({ data, onDelete }) => {
  return (
    <ListItem>
      <Paper sx={{ width: "100%" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={0.6}
        >
          <Typography variant="h6" ml={1}>
            {data.title}
          </Typography>
          <Box display="flex" alignItems="center">
            <Rating value={data.rating} readOnly />
            <IconButton
              aria-label="delete"
              sx={{ color: "#e02629" }}
              onClick={onDelete}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </ListItem>
  );
};
