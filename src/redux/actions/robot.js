import { PLACE } from '../types';
import { ROTATE } from '../types';
import { MOVE } from '../types';
import { REPORT } from '../types';
import { BLOCK } from '../types';
import { UNBLOCK } from '../types';

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

export const move = facing => dispatch => {
  dispatch({
    type: MOVE,
    payload: {
      facing,
    },
  });
};

export const report = () => dispatch => {
  dispatch({
    type: REPORT,
  });
};

export const block = direction => dispatch => {
  dispatch({
    type: BLOCK,
    payload: {
      direction,
    },
  });

  setTimeout(() => {
    dispatch({
      type: UNBLOCK,
    });
  }, 200);
};
