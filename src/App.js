import React, { useState, lazy, Suspense } from "react";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

// const Details = lazy(() => import("./Details"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        {/* <Suspense fallback={<h1>Loading...</h1>}> */}
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        {/* </Suspense> */}
      </div>
    </ThemeContext.Provider>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
