import React from 'react';
import {Content} from './components/styles/Content.styled';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import HomePage from './components/pages/Home'
import TvShowPage from './components/pages/TvShow';
import MoviePage from './components/pages/MoviePage';

function App() {
  return (
     <Router>
      <Content>
        <Navbar/>
        <Switch>
            <Route exact path ="/">
              <HomePage/>
            </Route>
            <Route path ="/top_movies">
              <MoviePage/>
            </Route>
            <Route path ="/top_tvshows">
              <TvShowPage/>
            </Route>
        </Switch>
      </Content>
     </Router>
  );
}

export default App;
