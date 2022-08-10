import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Activation } from "./pages/activation/Activation";
import Home from "./pages/Home";
import { Registration } from "./pages/registraton/Registration";
import { store } from "./redux";



function App() {
  return (
    <Provider store={store}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activation" element={<Activation />} />
        <Route path="/registraton" element={<Registration />} />
      </Routes>
    </Provider>
  );
}

export default App;
