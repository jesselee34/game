/** @jsx h */
import { h } from 'preact';

export const HEXAGON = 'HEXAGON';

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

const Hexagon = ({ level = 0 }) => (
  <svg viewBox="0 0 100 100" style={{ width: '70px', height: '70px', position: 'absolute' }} xmlns="http://www.w3.org/2000/svg">
    { graphic(level) }
  </svg>
);


export default Hexagon;
