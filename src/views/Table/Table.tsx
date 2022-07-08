import { TableProps } from "./types";
import { columns } from "./columns";
import { DataGrid } from "@mui/x-data-grid";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SearchBar } from "../../components/SearchBar";
import { FilterSelect } from "../../components/FilterSelect";

const responsiveStyle = { height: "calc(100vh - 120px)", width: "100%", marginTop: 64 };
const normalStyle = { height: "calc(100vh - 112px)", width: "100%", marginTop: 56 };

export const Table = ({ isLoading, data, rowCount, pageNumber, setPageNumber }: TableProps) => {
  const { width } = useWindowSize();

  return (
    <div style={width < 600 ? normalStyle : responsiveStyle}>
      <div style={{ display: "flex", width: "100%" }}>
        <SearchBar />
        <FilterSelect />
      </div>

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
        density="comfortable"
        disableColumnMenu={true}
        // onSelectionModelChange={(params) => console.log(params)}
      />
    </div>
  );
};
