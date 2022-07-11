import { Data } from "../types/data.types";
import { columns } from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { NotFound } from "./NotFound";

interface TableProps {
  isLoading: boolean;
  data: Data;
  setPageNumber: (pageNumber: number) => void;
  setCharacter: (bool: any) => void;
  handleOpen: () => void;
}

export const Table = ({ isLoading, data, setPageNumber, setCharacter, handleOpen }: TableProps) => {
  if (data.error === "There is nothing here") return <NotFound />;

  return (
    <DataGrid
      columns={columns}
      rows={data.results}
      rowCount={data.info.count}
      loading={isLoading}
      pagination
      rowsPerPageOptions={[20]}
      pageSize={20}
      paginationMode="server"
      onPageChange={(newPage) => setPageNumber(newPage)}
      density="comfortable"
      disableColumnMenu={true}
      keepNonExistentRowsSelected
      onSelectionModelChange={(id) => {
        setCharacter(data.results.filter((row) => row.id === id[0])[0]);
        handleOpen();
      }}
    />
  );
};
