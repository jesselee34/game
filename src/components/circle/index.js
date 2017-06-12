/** @jsx h */
import { h } from 'preact';
import { distribute } from '../../modules/shape';

export const CIRCLE = 'CIRCLE';

const graphic = (level) => {
  switch (level) {
    case 3:
      return (
        <g>
          <circle cx="50" cy="50" r="50" style={{ fill: '#4abdac' }} />
          <circle cx="50" cy="50" r="46" style={{ fill: '#4abdac', stroke: 'white', strokeWidth: '4' }} />
          <circle cx="50" cy="50" r="40" style={{ fill: '#4abdac', stroke: 'white', strokeWidth: '4' }} />
          <circle cx="50" cy="50" r="34" style={{ fill: '#4abdac', stroke: 'white', strokeWidth: '4' }} />
        </g>
      );
    case 2:
      return (
        <g>
          <circle cx="50" cy="50" r="50" style={{ fill: '#4abdac' }} />
          <circle cx="50" cy="50" r="46" style={{ fill: '#4abdac', stroke: 'white', strokeWidth: '4' }} />
          <circle cx="50" cy="50" r="40" style={{ fill: '#4abdac', stroke: 'white', strokeWidth: '4' }} />
        </g>
      );
    case 1:
      return (
        <g>
          <circle cx="50" cy="50" r="50" style={{ fill: '#4abdac' }} />
          <circle cx="50" cy="50" r="46" style={{ fill: '#4abdac', stroke: 'white', strokeWidth: '4' }} />
        </g>
      );
    case 0:
    default:
      return (
        <g>
          <circle cx="50" cy="50" r="50" style={{ fill: '#4abdac' }} />
        </g>
      );
  }
};

const Circle = ({ x = 1, y = 1, level = 0 }) => (
  <div style={{ position: 'absolute', left: distribute(x, 85), top: distribute(y, 85) }}>
    <svg viewBox="0 0 100 100" style={{ width: '75px', height: '75px' }} xmlns="http://www.w3.org/2000/svg">
      { graphic(level) }
    </svg>
  </div>
);


export default Circle;
