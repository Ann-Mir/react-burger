import { createAction, PayloadActionCreator } from '@reduxjs/toolkit';

interface IWsInitActions {
  wsConnectionInit: PayloadActionCreator<string>;
  wsConnectionClose: PayloadActionCreator;
}

const wsInitActions: IWsInitActions = {
  wsConnectionInit: createAction('WS_CONNECTION_INIT'),
  wsConnectionClose: createAction('WS_CONNECTION_CLOSE'),
};


export default wsInitActions;
