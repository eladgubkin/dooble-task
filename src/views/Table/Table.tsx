import { Data } from "../../types/data.types";
import { columns } from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { NotFound } from "../../components/common/NotFound";

interface TableProps {
  isLoading: boolean;
  data: Data;
  setPageNumber: (pageNumber: number) => void;
}

export const Table = ({ isLoading, data, setPageNumber }: TableProps) => {
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
      // onSelectionModelChange={(params) => ""}
    />
  );
};
