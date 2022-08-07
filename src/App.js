import React from "react";
import { Provider } from "react-redux";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/home-page/home-page";
import  {store}  from "./redux";


function App() {
  return (
    <Provider store={store}>
   
    <div className="App">
      <Header/>
     
       
        <HomePage/>
       
    
    </div>
   
    </Provider>
  );
}

export default App;
