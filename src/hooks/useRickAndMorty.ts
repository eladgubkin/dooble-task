import { useEffect } from "react";
import { useQuery } from "react-query";
import { queryClient } from "../main";

const fetchCharacters = (pageNumber: number, search: string, status: string, gender: string) =>
  fetch(
    `https://rickandmortyapi.com/api/character?page=${
      pageNumber + 1
    }&name=${search}&status=${status}&gender=${gender}`
  ).then((res) => res.json());

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
      { staleTime: 60 * 1000 }
    );
  }, [pageNumber, search]);

  return useQuery(
    ["characters", pageNumber, search, status, gender],
    () => fetchCharacters(pageNumber, search, status, gender),
    {
      staleTime: 60 * 1000,
      keepPreviousData: true,
    }
  );
};
