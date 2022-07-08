import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const Selector = ({ label, menuItems }: { label: string; menuItems: string[] }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl style={{ maxWidth: 200, minWidth: 85 }} variant="standard">
      <InputLabel id="label">{label}</InputLabel>
      <Select labelId="label" variant="filled" onChange={handleChange}>
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {menuItems.map((item, i) => (
          <MenuItem key={i} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const FilterSelect = () => {
  return (
    <>
      <Selector label="Status" menuItems={["Alive", "Dead", "unknown"]} />
      <Selector label="Gender" menuItems={["Male", "Female", "unknown"]} />
    </>
  );
};
