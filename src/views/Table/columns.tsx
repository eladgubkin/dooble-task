import { GridColDef } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";

export const columns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    width: 80,
    sortable: false,
    renderCell: (params) => {
      return <Avatar src={params.value} />;
    },
  },
  { field: "name", headerName: "Character Name", width: 150 },
  {
    field: "origin",
    headerName: "Origin",
    width: 175,
    renderCell: (params) => params.value.name,
  },
  { field: "status", headerName: "Status", width: 150 },
  { field: "species", headerName: "Species", width: 150 },
  { field: "gender", headerName: "Gender", width: 150 },
];
