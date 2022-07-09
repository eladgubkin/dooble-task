import { useState } from "react";
import { Table } from "./views/Table/Table";
import { useRickAndMorty } from "./hooks/useRickAndMorty";
import { Layout } from "./components/layout/Layout";
import { useWindowSize } from "./hooks/useWindowSize";
import { Controls } from "./components/common/Controls";
import { Loading } from "./components/common/Loading";

const responsiveStyle = { height: "calc(100vh - 200px)", width: "100%", marginTop: 56 };
const normalStyle = { height: "calc(100vh - 208px)", width: "100%", marginTop: 64 };

export const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const { width } = useWindowSize();
  const { isLoading, data } = useRickAndMorty(pageNumber, search, status, gender);

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <div style={width < 600 ? responsiveStyle : normalStyle}>
        <Controls
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          gender={gender}
          setGender={setGender}
        />
        <Table data={data} isLoading={isLoading} setPageNumber={setPageNumber} />
      </div>
    </Layout>
  );
};
