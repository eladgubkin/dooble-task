import { TextField } from "@mui/material";

export const SearchBar = () => {
  return (
    <TextField
      fullWidth
      label="Search a Character..."
      variant="filled"
      onChange={(e) => console.log(e.target.value)}
    />
  );
};
