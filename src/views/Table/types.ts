import { GridValidRowModel } from "@mui/x-data-grid";

export interface TableProps {
  isLoading: boolean;
  data: GridValidRowModel[];
  rowCount: number;
  pageCount: number;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
}
