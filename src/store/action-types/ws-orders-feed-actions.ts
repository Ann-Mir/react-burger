import {
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage
} from '../slices/ws-orders-feed-slice';


const ordersFeedActions = {
  onOpen: wsConnectionSuccess,
  onMessage: wsGetMessage,
  onError: wsConnectionError,
  onClose: wsConnectionClosed,
};


export default ordersFeedActions;
