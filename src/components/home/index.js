/** @jsx h */
import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.less';

const Home = () => (
  <div className={style.home}>
    <h1>Game</h1>
    <h2>Main Menu</h2>
    <Link href="/game" className={style.playBtn}>Play</Link>
  </div>
);

export default Home;
