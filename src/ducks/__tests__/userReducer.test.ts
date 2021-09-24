import { myCarsReducer } from '../reducer';
import * as actionTypes from '../actionTypes';
import { myCarsInitialState } from '../initialState';

describe('testing myCarsReducer', () => {
  describe('when SET_YMMTM_DATA is dispatched', () => {
    const state = myCarsInitialState;
    const payload = {
      myCarsAPIStatus: {
        isComplete: false,
        isError: false,
      },
      myCarsResponse: [
        {
          vehicle: {
            purchaseId: 930007,
          },
          status: 'orderInProgress',
          data: {
            isCartPurchase: true,
          },
        },
      ],
    };
    const action = { type: actionTypes.SET_MY_CARS_REQUEST_COMPLETE, payload };
    it('should set the year make model trim and mileage on currentVehicle field', () => {
      console.log(JSON.stringify(myCarsReducer(state, action)));
      expect(myCarsReducer(state, action)).toEqual({
        ...state,
        myCarsAPIStatus: payload.myCarsAPIStatus,
        cars: payload.myCarsResponse,
      });
    });
  });
});
