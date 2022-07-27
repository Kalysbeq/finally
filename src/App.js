import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/home-page/home-page";
import  {store}  from "./redux";


function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
