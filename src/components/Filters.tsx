import { Selector } from "./Selector";

export const Filters = ({
  setStatus,
  setGender,
  status,
  gender,
}: {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  gender: string;
}) => {
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
