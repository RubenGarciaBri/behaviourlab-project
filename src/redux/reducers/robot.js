import { PLACE } from '../types';
import { ROTATE } from '../types';
import { MOVE } from '../types';
import { REPORT } from '../types';
import { BLOCK } from '../types';
import { UNBLOCK } from '../types';

const initialState = {
  x: 8.8,
  y: 3.7,
  facing: 'SOUTH',
  isPlaced: false,
  reporting: false,
  block: null,
};

export default function robot(state = initialState, action) {
  switch (action.type) {
    case PLACE:
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y,
        facing: action.payload.facing,
        isPlaced: true,
        reporting: false,
      };

    case ROTATE:
      return {
        ...state,
        facing: action.payload.facing,
        reporting: false,
      };

    case MOVE: {
      if (action.payload.facing === 'NORTH') {
        return {
          ...state,
          y: state.y + 1,
          reporting: false,
        };
      } else if (action.payload.facing === 'EAST') {
        return {
          ...state,
          x: state.x + 1,
          reporting: false,
        };
      } else if (action.payload.facing === 'SOUTH') {
        return {
          ...state,
          y: state.y - 1,
          reporting: false,
        };
      } else {
        return {
          ...state,
          x: state.x - 1,
          reporting: false,
        };
      }
    }

    case REPORT:
      return {
        ...state,
        reporting: true,
      };

    case BLOCK:
      return {
        ...state,
        block: action.payload.direction,
        reporting: false,
      };

    case UNBLOCK:
      return {
        ...state,
        block: null,
      };

    default:
      return state;
  }
}
