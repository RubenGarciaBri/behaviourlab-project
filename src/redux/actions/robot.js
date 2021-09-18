import { PLACE } from '../types';

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
