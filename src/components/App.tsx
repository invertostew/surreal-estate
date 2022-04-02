import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

import "../styles/App.css";

function App() {
  return (
    <main className="surreal-estate-app">
      <Header />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </main>
  );
}

export default App;
