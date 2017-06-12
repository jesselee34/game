/** @jsx h */
import { h } from 'preact';
import style from './style';

const Grid = () => (
  <svg viewBox="0 0 1020 680" class={style.grid} xmlns="http://www.w3.org/2000/svg">
    <pattern id="grid" width="85" height="85" patternUnits="userSpaceOnUse">
      <rect width="85" height="85" fill="#FAFAFA" />
      <path d="M 85 0 L 0 0 0 85" fill="none" stroke="gray" style={{ 'stroke-width': '1' }} />
    </pattern>

    <rect width="1020" height="680" fill="url(#grid)" stroke="gray" style={{ 'stroke-width': '1' }} />
  </svg>
);


export default Grid;
