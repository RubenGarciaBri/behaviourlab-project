import { PLACE } from '../types';
import { ROTATE } from '../types';

export const place = (x, y, facing) => dispatch => {
  dispatch({
    type: PLACE,
    payload: {
      x,
      y,
      facing,
    },
  });
};

export const rotate = (facing) => dispatch => {
  dispatch({
    type: ROTATE,
    payload: {
      facing
    },
  });
};