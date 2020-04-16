import React, {Component} from 'react';
import './App.css';
import News from './Component/News/News';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import FullNews from './Component/FullNews/FullNews';
// import NewsList from './Component/NewsList/NewsList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <News />
        </div>
        <Switch>
          <Route path='/' exact component={News}/>
          <Route path='/:index' exact component={FullNews}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
