import { useState } from "react";
import { Table } from "./views/Table/Table";
import { useRickAndMorty } from "./hooks/useRickAndMorty";
import Layout from "./components/Layout";

export const App = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { isLoading, data, isError } = useRickAndMorty(pageNumber);

  if (isError) return <h1>Error...</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Layout>
      <Table
        data={data.results}
        rowCount={data.info.count}
        pageCount={data.info.pages}
        isLoading={isLoading}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </Layout>
  );
};
