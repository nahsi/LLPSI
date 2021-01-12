import './App.scss';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home.js";
import Chapters from "./pages/Chapters.js"
import Exercise from './pages/Exercise.js';
import Chapter from './pages/Chapter.js';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ScrollToTop from './components/ScrollToTop';

export default class App extends React.Component {
  render = () => {
    return (
      <Router >
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/chapters">
            <Chapters />
          </Route>
          <Route path='/chapter/:chapter/:exercise' render={(props) => {
            return (<Exercise {...props} />)
          }} />
          <Route path='/chapter/:chapter' render={(props) => {
            return (<Chapter {...props} />)
          }} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
