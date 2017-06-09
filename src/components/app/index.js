/** @jsx h */
import { h } from 'preact';
import { Router } from 'preact-router';
import Home from '../home';
import Game from '../game';

import style from './style.less';

const App = () => (
  <div id="app" className={style.app}>
    <Router>
      <Home path="/" />
      <Game path="/game" />
    </Router>
  </div>
);

export default App;
