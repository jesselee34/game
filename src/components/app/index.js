/** @jsx h */
import { h } from 'preact';
import { Router } from 'preact-router';
import Home from '../home';
import Game from '../game';

import style from './style.less';

// Mock pieces
const pieces = [
  {
    type: 'CIRCLE',
    level: 1,
    x: 1,
    y: 1,
    hp: 100
  },
  {
    type: 'CIRCLE',
    level: 2,
    x: 1,
    y: 2,
    hp: 100
  },
  {
    type: 'CIRCLE',
    level: 3,
    x: 1,
    y: 3,
    hp: 100
  }
];

const App = () => (
  <div id="app" className={style.app}>
    <Router>
      <Home path="/" />
      <Game path="/game" pieces={pieces} />
    </Router>
  </div>
);

export default App;
