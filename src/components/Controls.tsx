import { useContext } from "react";
import { SearchBar } from "./SearchBar";
import { Filters } from "./Filters";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../main";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const Controls = ({ search, setSearch, status, setStatus, gender, setGender }) => {
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
        <Filters setStatus={setStatus} setGender={setGender} status={status} gender={gender} />
        <Button
          style={{ minWidth: 115, margin: "10px 0 10px 0" }}
          variant="contained"
          onClick={() => {
            setSearch("");
            setStatus("");
            setGender("");
          }}
        >
          CLEAR ALL
        </Button>
      </div>
    </div>
  );
};
