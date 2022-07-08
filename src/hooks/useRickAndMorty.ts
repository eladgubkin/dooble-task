import { useEffect } from "react";
import { useQuery } from "react-query";
import { queryClient } from "../main";

const fetchCharacters = (pageNumber: number) =>
  fetch("https://rickandmortyapi.com/api/character?page=" + (pageNumber + 1)).then((res) =>
    res.json()
  );

export const useRickAndMorty = (pageNumber: number) => {
  useEffect(() => {
    queryClient.prefetchQuery(
      ["characters", pageNumber + 1],
      () => fetchCharacters(pageNumber + 1),
      { staleTime: 60 * 1000 }
    );
  }, [pageNumber]);

  return useQuery(["characters", pageNumber], () => fetchCharacters(pageNumber), {
    staleTime: 60 * 1000,
  });
};
