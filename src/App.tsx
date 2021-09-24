import React from 'react';
import {Provider} from "react-redux";
import store, {history} from "./store/configureStore";
import {ConnectedRouter} from "connected-react-router";
import Routes from "./Routes";

export default (
    <Provider store={store as any}>
      <ConnectedRouter history={history}>
          <Routes/>
      </ConnectedRouter>
    </Provider>
);
