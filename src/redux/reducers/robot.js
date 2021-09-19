import { PLACE } from '../types';
import { ROTATE } from '../types';
import { MOVE } from '../types';

const initialState = {
  x: 2,
  y: 2,
  facing: 'SOUTH',
};

export default function robot(state = initialState, action) {
  switch (action.type) {
    case PLACE:
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y,
        facing: action.payload.facing,
      };

    case ROTATE:
      return {
        ...state,
        facing: action.payload.facing,
      };

    case MOVE:
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y,
        facing: action.payload.facing,
      };

    default:
      return state;
  }
}
