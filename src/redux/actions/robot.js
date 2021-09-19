import { PLACE } from '../types';
import { ROTATE } from '../types';
import { MOVE } from '../types';
import { REPORT } from '../types';

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

export const rotate = facing => dispatch => {
  dispatch({
    type: ROTATE,
    payload: {
      facing,
    },
  });
};

export const move = (x, y, facing) => dispatch => {
  dispatch({
    type: MOVE,
    payload: {
      x,
      y,
      facing,
    },
  });
};

export const report = () => dispatch => {
  dispatch({
    type: REPORT,
  });
};
