import React from "react";

import axios from "axios";
import { useDispatch } from "react-redux";
import { setQRs } from "./redux/actions/qrs";

import { Footer, Header } from "./components";
import Pages from "./routes";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios
      .get("http://localhost:3001/qrs?_sort=date&_order=asc")
      .then(({ data }) => {
        dispatch(setQRs(data));
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
