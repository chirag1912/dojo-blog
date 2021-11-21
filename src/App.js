import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Menu from "./Menu";
import Cart from "./Cart";


function App() {

  // All the routes will have to be enclosed within the App.js component itself;
  // The Router tag will be used and then inside router Switch redirects to specific route component;
  // With Route mentioning the exact path of the URL to be looked after and to render the respective component as written inside the Route Tag 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
