import { GridColDef } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export const columns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    renderCell: (params) => {
      return <Avatar src={params.value} />;
    },
    align: "center",
    headerAlign: "center",
    sortable: false,
  },
  {
    field: "name",
    headerName: "Character Name",
    headerAlign: "center",
    flex: 1,
    minWidth: 225,
    sortable: false,
  },
  {
    field: "origin",
    headerName: "Origin",
    headerAlign: "center",
    flex: 2,
    minWidth: 225,
    sortable: false,
    renderCell: (params) => params.value.name,
  },
  {
    field: "status",
    headerName: "Status",
    align: "center",
    headerAlign: "center",
    sortable: false,
    renderCell: (params) => {
      if (params.value === "Alive") return <Chip label={params.value} color="success" />;
      if (params.value === "Dead") return <Chip label={params.value} color="error" />;
      if (params.value === "unknown") return <Chip label={params.value} disabled />;
    },
  },
  {
    field: "species",
    headerName: "Species",
    align: "center",
    headerAlign: "center",
    sortable: false,
  },
  {
    field: "gender",
    headerName: "Gender",
    align: "center",
    headerAlign: "center",
    sortable: false,
  },
];
