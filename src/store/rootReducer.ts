import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {batManReducer} from "../ducks/reducer";

const rootReducer = (history:any) => combineReducers({
  router: connectRouter(history),
  data: batManReducer
});

export default rootReducer;
