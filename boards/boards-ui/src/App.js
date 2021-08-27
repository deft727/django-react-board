import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from "./components/table/Table";
import {BrowserRouter as Router, Switch, Route, RedirectProps, Redirect} from "react-router-dom";
import BoardDetail from "./components/board_detail/BoardDetail";
import Navbar from "./components/navbar/navbar";
import TopicDetail from "./components/topic_detail/Topic";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
 <Router>
    < Navbar />
      <Switch>
        <Route path="/board/:id/topic/:pk/" exect component={TopicDetail} />
        <Route path="/board/:id/" exect component={BoardDetail} />
        <Route path="" exect component={Table} />
      </Switch>
     < Footer />
</Router>

    </div>
  );
}

export default App;
