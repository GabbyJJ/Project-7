import React, { useLayoutEffect } from "react";
import {
  Switch,
  Route,
  useHistory,
  setLocation,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import Photos from "./views/Photos";
import apiKey from "./config";

function App() {
  let location = useLocation();
  let history = useHistory();
  let [search, setSearch] = React.useState(null);
  React.useEffect(() => {
    console.log(location.pathname.split("/")[2]);
  });
  return (
    <body>
      <div class="container">
        <form
          class="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            history.push(`/search/${search}`);
          }}
        >
          <input
            type="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            name="search"
            placeholder="Search"
            required
          />
          <button type="submit" class="search-button">
            <svg
              fill="#fff"
              height="24"
              viewBox="0 0 23 23"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </form>
        {/* Navigation Component Goes Here */}

        <Nav />
        <Switch>
          <Route path="/cats">
            <Photos apiKey={apiKey} search="cats" />
          </Route>
          <Route path="/dogs">
            <Photos apiKey={apiKey} search="dogs" />
          </Route>
          <Route path="/computers">
            <Photos apiKey={apiKey} search="computers" />
          </Route>
          <Route path="/search/:searchInput">
            <Photos apiKey={apiKey} search={location.pathname.split("/")[2]} />
          </Route>
        </Switch>
      </div>
    </body>
  );
}

export default App;
