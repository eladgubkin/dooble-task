import { useState } from "react";
import { useRickAndMorty } from "./hooks/useRickAndMorty";

// Components
import { Table } from "./components/Table";
import { FiltersArea } from "./components/FiltersArea";
import { Dialog } from "./components/Dialog";
import { Loading } from "./components/Loading";

export const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [character, setCharacter] = useState(null);
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useRickAndMorty(pageNumber, search, status, gender);

  if (isLoading) return <Loading />;

  return (
    <div style={{ height: "calc(100vh - 144px)" }}>
      {/* ------- Filters Area ------- */}
      <FiltersArea
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        gender={gender}
        setGender={setGender}
        setPageNumber={setPageNumber}
      />

      {/* ------- Table ------- */}
      <Table
        data={data}
        isLoading={isLoading}
        setPageNumber={setPageNumber}
        setCharacter={setCharacter}
        handleOpen={() => setOpen(true)}
      />

      {/* ------- Dialog Modal ------- */}
      {character && <Dialog open={open} handleClose={() => setOpen(false)} character={character} />}
    </div>
  );
};
