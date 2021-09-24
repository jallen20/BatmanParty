import * as types from './actionTypes';
import { initialState } from './initialState';

/**
 * My Cars Reducer
 */

export const batManReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    default: {
      return state;
    }
  }
};
