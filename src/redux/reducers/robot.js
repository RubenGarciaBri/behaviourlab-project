import { PLACE } from '../types';
import { ROTATE } from '../types';
import { MOVE } from '../types';
import { REPORT } from '../types';
import { BLOCK } from '../types';
import { UNBLOCK } from '../types';

const initialState = {
  // Robot's coordinates. The initial values have been manually selected so the robot is located hovering over the ControlPanel component. Once the robot has been placed on the grid, it won't be posible to exceed any values above 4 and below 0.
  x: 8.8,
  y: 3.7,
  // Robot's facing direction
  facing: 'SOUTH',
  // Indicates if the robot has been placed on the grid to start the game
  isPlaced: false,
  // Indicates if the position report command has been triggered
  reporting: false,
  // Indicates if the robot is facing the edge of the table and in which direction. The robot's component will trigger an animation depending on the direction it's blocked against.
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
