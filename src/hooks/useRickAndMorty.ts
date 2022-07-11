import { useEffect } from "react";
import { useQuery } from "react-query";
import { queryClient } from "../main";

const fetchCharacters = (pageNumber: number, search: string, status: string, gender: string) => {
  return fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNumber + 1}${
      search ? `&name=${search}` : ""
    }${status ? `&status=${status}` : ""}${gender ? `&gender=${gender}` : ""}`
  ).then((res) => res.json());
};

export const useRickAndMorty = (
  pageNumber: number,
  search: string,
  status: string,
  gender: string
) => {
  useEffect(() => {
    queryClient.prefetchQuery(
      ["characters", pageNumber + 1, search, status, gender],
      () => fetchCharacters(pageNumber + 1, search, status, gender),
      { staleTime: 60 * 1000 } // will refetch after 60 seconds
    );
  }, [pageNumber, search, status, gender]);

  return useQuery(
    ["characters", pageNumber, search, status, gender],
    () => fetchCharacters(pageNumber, search, status, gender),
    {
      staleTime: 60 * 1000, // will refetch after 60 seconds
      keepPreviousData: true, // this will deny refresh of page when paginating
    }
  );
};
