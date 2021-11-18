import wsInitActions from './ws-init-actions';
import ordersFeedActions from './ws-orders-feed-actions';
import userFeedActions from './ws-user-feed-actions';


type TWsActions = {
  getAllFeedOrders: typeof ordersFeedActions ;
  getUserFeedOrders: typeof userFeedActions;
  wsInit: typeof wsInitActions;
  [k: string]: any;
};

const wsActions: TWsActions = {
  getAllFeedOrders: ordersFeedActions ,
  getUserFeedOrders: userFeedActions,
  wsInit: wsInitActions,
};


export default wsActions;
