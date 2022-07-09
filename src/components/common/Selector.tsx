import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export const Selector = ({ label, menuItems, setSelectValue, selectValue }) => {
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
