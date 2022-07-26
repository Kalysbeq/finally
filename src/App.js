import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/home-page/home-page";



function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      
      <Switch>
       
       <Route path="/">
        <HomePage/>
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
