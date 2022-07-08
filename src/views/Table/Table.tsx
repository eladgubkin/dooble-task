import { TableProps } from "./types";
import { columns } from "./columns";
import { DataGrid } from "@mui/x-data-grid";

export const Table = ({ isLoading, data, rowCount, pageNumber, setPageNumber }: TableProps) => {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={data}
        rowCount={rowCount}
        loading={isLoading}
        pagination
        rowsPerPageOptions={[20]}
        page={pageNumber}
        pageSize={20}
        paginationMode="server"
        onPageChange={(newPage) => setPageNumber(newPage)}
      />
    </div>
  );
};
