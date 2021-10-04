import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Home} from "./components/Home"
import {AddNote} from "./components/AddNote"
import {EditNote} from "./components/EditNote"

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <Router>
        <Switch> 
          <Route path="/add" component={AddNote} />
          <Route path="/edit/:id" component={EditNote} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
