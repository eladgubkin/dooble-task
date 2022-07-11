import { SelectorProps } from "../types/props.types";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

export const Selector = ({ label, menuItems, setSelectValue, selectValue }: SelectorProps) => {
  return (
    <FormControl fullWidth variant="standard" style={{ margin: 10 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
        {menuItems.map((item: string, i: number) => (
          <MenuItem key={i} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
