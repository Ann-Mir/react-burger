import reducer, {
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage
} from './ws-orders-feed-slice';


const initialState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
  error: false,
};

const orders = ['order']

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should set state to WS success', () => {
  expect(reducer(initialState, wsConnectionSuccess())).toEqual({
    ...initialState,
    wsConnected: true,
    error: false,
  })
});

test('should set state to WS error', () => {
  expect(reducer(initialState, wsConnectionError())).toEqual({
    ...initialState,
    wsConnected: false,
    error: true,
  })
});

test('should set state to WS connection close', () => {
  expect(reducer(initialState, wsConnectionClosed())).toEqual({
    ...initialState,
    wsConnected: false,
    error: false,
  })
});

test('should set state to received message', () => {
  expect(reducer(initialState,
    wsGetMessage({
      orders: orders,
      total: 100,
      totalToday: 5,
      success: true,
    }))).toEqual({
    ...initialState,
    orders: orders,
    total: 100,
    totalToday: 5,
  })
});
