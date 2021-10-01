import { initialState } from './initialState';

export const batManReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    default: {
      return state;
    }
  }
};
