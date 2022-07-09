import { SearchBar } from "./SearchBar";
import { Filters } from "./Filters";
import Button from "@mui/material/Button";

export const Controls = ({ search, setSearch, status, setStatus, gender, setGender }) => {
  return (
    <div style={{ margin: 10 }}>
      <SearchBar search={search} setSearch={setSearch} />
      <div style={{ display: "flex" }}>
        <Filters setStatus={setStatus} setGender={setGender} status={status} gender={gender} />
        <Button
          style={{ minWidth: 110, margin: "10px 0" }}
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
