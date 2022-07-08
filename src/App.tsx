import { useState } from "react";
import { Table } from "./views/Table/Table";
import { useRickAndMorty } from "./hooks/useRickAndMorty";

export const App = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { isLoading, data, isError } = useRickAndMorty(pageNumber);

  if (isError) return <h1>Error...</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Table
      data={data.results}
      rowCount={data.info.count}
      isLoading={isLoading}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
    />
  );
};
