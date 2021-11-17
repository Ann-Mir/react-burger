import {AnyAction, MiddlewareAPI} from '@reduxjs/toolkit';
import wsActions from '../action-types/index';
import wsService from '../../services/ws-service';


export const socketMiddleware = () => {

  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;
    let socketName = '';

    return (next: (a: AnyAction) => void) => (action: AnyAction) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === wsActions.wsInit.wsConnectionInit.toString()) {
        socketName = payload;
        socket = wsService[payload]();
      }

      if (type === wsActions.wsInit.wsConnectionClose.toString()) {
        socket && socket.close();
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch(wsActions[socketName].onOpen(event.type));
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const message = JSON.parse(data);

          dispatch(wsActions[socketName].onMessage(message));
        };

        socket.onerror = (event) => {
          dispatch(wsActions[socketName].onError(event.type));
        };

        socket.onclose = (event) => {
          dispatch(wsActions[socketName].onClose(event.type));
        };
      }
      next(action);
    };
  };
};


export default socketMiddleware;
