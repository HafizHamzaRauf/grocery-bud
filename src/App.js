import React from "react";
import Main from "./components/Main";
import { ItemsProvider } from "./store/context";

const App = () => (
  <ItemsProvider>
    <Main />
  </ItemsProvider>
);

export default App;
