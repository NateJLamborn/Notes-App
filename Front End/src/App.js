import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Home} from "./components/Home"
import {AddNote} from "./components/AddNote"
import {EditNote} from "./components/EditNote"
import {ViewNote} from './components/ViewNote'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth: "50rem", margin: "4rem auto"}}>
      <Router>
        <Switch> 
          <Route path="/add" component={AddNote} />
          <Route path="/edit/:id" component={EditNote} />
          <Route exact path="/" component={Home} />
          <Route path="/view/:id" component={ViewNote} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
