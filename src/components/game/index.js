/** @jsx h */
import { h } from 'preact';
import Circle, { CIRCLE } from '../circle';
import Square, { SQUARE } from '../square';
import Hexagon, { HEXAGON } from '../hexagon';
import Triangle, { TRIANGLE } from '../triangle';
import Grid from '../grid';

import style from './style.less';

const Piece = ({ type, level, x, y, hp }) => {
  let p;
  switch (type) {
    case CIRCLE:
      p = <Circle level={level} x={x} y={y} hp={hp} />
      break;
    case SQUARE:
      p = <Square level={level} x={x} y={y} hp={hp} />
      break;
    case HEXAGON:
      p = <Hexagon level={level} x={x} y={y} hp={hp} />
      break;
    case TRIANGLE:
      p = <Triangle level={level} x={x} y={y} hp={hp} />
      break;
  }

  return p;
};

const Game = ({ pieces = [] }) => (
  <div className={style.game}>
    <Grid />
    {
      pieces.map(p => <Piece type={p.type} level={p.level} x={p.x} y={p.y} />)
    }
  </div>
);

export default Game;
