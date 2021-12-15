import React from "react";

import { Footer, Header } from "./components";
import Pages from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
