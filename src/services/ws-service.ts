import {BASE_SOCKET_URL, SocketRoutes} from '../utils/constants';
import {getCookie} from '../utils/common';


interface IWsService {
  [k: string]: () => WebSocket;
}


const wsService: IWsService = {
  getAllFeedOrders: () => new WebSocket(`${BASE_SOCKET_URL}${SocketRoutes.ALL}`),
  getUserFeedOrders: () => new WebSocket(`${BASE_SOCKET_URL}?token=${getCookie( 'accessToken')}`),
};


export default wsService;
