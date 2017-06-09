/** @jsx h */
import { h } from 'preact';
import Circle from '../circle';
import style from './style.less';

const Game = () => (
  <div className={style.game}>
    <Circle level={1} />
  </div>
);

export default Game;
