
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Orderalpha from "./components/Orderalpha";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio"
// import Wrapper from "./components/Wrapper";
import Db from "./db";




function App() {
  document.title = "Profile";
  return (
    <Router>
      <div>
        {/* <Wrapper> */}
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/Portfolio" render={() => <Portfolio db={Db} />} />
        {/* </Wrapper> */}
      </div>
    </Router>
  );
}


export default App;
