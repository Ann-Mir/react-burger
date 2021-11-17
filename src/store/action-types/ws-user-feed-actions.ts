import {
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage
} from '../slices/ws-user-feed-slice';


const userFeedActions = {
  onOpen: wsConnectionSuccess,
  onMessage: wsGetMessage,
  onError: wsConnectionError,
  onClose: wsConnectionClosed,
};


export default userFeedActions;
