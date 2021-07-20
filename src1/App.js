import './App.css';
import Header from "./components/Header";
import React from "react";
import Html from "./components/Html";
import Css from "./components/Css";
import Login from "./components/login";
import Android from "./components/Android";
import Python from "./components/Python";
import Cpp from "./components/Cpp";
import Home from "./components/Home";
import  AdvJava from "./components/AdvJava";
import ReactJ from "./components/ReactJ";
import C from "./components/C";
import Sql from "./components/Sql";
import Header1 from './components/Header1';
import { Route, Switch } from 'react-router';
import Compiler from './components/Compiler';
import Footer from './components/Footer';
import Java from './components/Java';
import JavaScript from './components/JavaScript';

function App() {
  return (
    <div>
      <Header />
      
      <Header1 /> 
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/html" component={Html} />
        <Route exact path="/compiler" component={Compiler} />
        <Route exact path="/css" component={Css} />
        <Route exact path="/android" component={Android} />
        <Route exact path="/python" component={Python} />
        <Route exact path="/cpp" component={Cpp} />
        <Route exact path="/c" component={C} />
        <Route exact path="/sql" component={Sql} />
        <Route exact path="/java" component={Java} />
        <Route exact path="/advjava" component={AdvJava} />
        <Route exact path="/reactj" component={ReactJ} /> 
        <Route exact path="/javascript" component={JavaScript} /> 
        <Route exact path="/login" component={Login} /> 
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
