import { FiltersAreaProps } from "../types/props.types";
import { useContext } from "react";

// Components
import { SearchBar } from "./SearchBar";
import { SelectFilters } from "./SelectFilters";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";

// Theme
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../main";

// Icons
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const FiltersArea = ({
  search,
  setSearch,
  status,
  setStatus,
  gender,
  setGender,
  setPageNumber,
}: FiltersAreaProps) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <div style={{ margin: 10 }}>
      <div style={{ display: "flex" }}>
        <SearchBar search={search} setSearch={setSearch} />
        <IconButton
          onClick={colorMode.toggleColorMode}
          style={{ margin: "5px 0 0 10px", height: 48 }}
        >
          {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
      <div style={{ display: "flex" }}>
        <SelectFilters
          setStatus={setStatus}
          setGender={setGender}
          status={status}
          gender={gender}
        />
        <Button
          style={{ minWidth: 115, margin: "10px 0 10px 0" }}
          variant="contained"
          onClick={() => {
            setSearch("");
            setStatus("");
            setGender("");
            setPageNumber(0);
          }}
        >
          CLEAR ALL
        </Button>
      </div>
    </div>
  );
};
