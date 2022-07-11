import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useDebounce } from "../hooks/useDebounce";

export const SearchBar = ({ search, setSearch }) => {
  const [value, setValue] = useState("");
  const debouncedSearch = useDebounce(value, 500);

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    if (search === "") setValue("");
  }, [search]);

  return (
    <TextField
      fullWidth
      label="Search characters..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
