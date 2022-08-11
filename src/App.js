import "./App.css";
import { fetchData } from "./api";
import { useEffect } from "react";
import { useState } from "react";
import Main from "./Component/Main";
import Nav from "./Component/Nav";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function apiReq() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    apiReq();
  }, []);
  return (
    <div>
      <Nav />
      <Main data={data} />
    </div>
  );
}

export default App;
