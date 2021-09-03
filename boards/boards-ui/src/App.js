import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from "./components/table/Table";
import {BrowserRouter as Router, Switch, Route, RedirectProps, Redirect} from "react-router-dom";
import BoardDetail from "./components/board_detail/BoardDetail";
import MyNavbar from "./components/navbar/navbar";
import TopicDetail from "./components/topic_detail/Topic";
import Footer from "./components/footer/footer";
import CustomersList from "./components/customers/CustomersList";
import  CustomerCreateUpdate  from './components/customers/CustomerCreateUpdate'
import InfoPageDetail from "./components/InfoPages/infopages";
import LoginFormik from "./components/auth/signUpform";
import RegisterPage from "./components/auth/registerForm";
import Profile from "./components/account/my_account";


function App() {
  return (
    <div className="App">
 <Router>
    < MyNavbar />
      <Switch>

      <Route path="/auth/token/login/" component={LoginFormik} />
      <Route path="/auth/users/" component={RegisterPage} />

      <Route path="/pages/:id/" component={InfoPageDetail} />
      <Route path="/account/" component={Profile} />

      <Route path="/customer-list/" exact component={CustomersList} />
      <Route path="/customer/:pk/"  component={CustomerCreateUpdate} />
      <Route path="/customer/" exact component={CustomerCreateUpdate} />

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
