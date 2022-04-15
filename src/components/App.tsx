import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import SideBar from "./SideBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

import "../styles/App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="surreal-estate-app">
      <Header />
      <main className="surreal-estate">
        <SideBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
