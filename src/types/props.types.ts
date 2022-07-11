import React from "react";
import { Character, Data } from "./data.types";

export interface TableProps {
  isLoading: boolean;
  data: Data;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setCharacter: React.Dispatch<React.SetStateAction<any>>;
  handleOpen: () => void;
}

export interface FiltersAreaProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface SelectFiltersProps {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  gender: string;
}

export interface SelectorProps {
  label: string;
  menuItems: string[];
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  selectValue: string;
}

export interface DialogProps {
  open: boolean;
  handleClose: () => void;
  character: Character;
}
