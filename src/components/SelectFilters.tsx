import { SelectFiltersProps } from "../types/props.types";
import { Selector } from "./Selector";

export const SelectFilters = ({ setStatus, setGender, status, gender }: SelectFiltersProps) => {
  return (
    <>
      <Selector
        label="Status"
        menuItems={["Alive", "Dead", "unknown"]}
        setSelectValue={setStatus}
        selectValue={status}
      />
      <Selector
        label="Gender"
        menuItems={["Male", "Female", "Genderless", "unknown"]}
        setSelectValue={setGender}
        selectValue={gender}
      />
    </>
  );
};
