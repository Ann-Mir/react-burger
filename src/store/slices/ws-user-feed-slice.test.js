import reducer, {
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage
} from './ws-user-feed-slice';


const initialState = {
  orders: [],
  wsConnected: false,
  error: false,
};

const orders = ['first', 'second'];

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
      success: true,
    }))).toEqual({
    ...initialState,
    orders: orders,
  })
});
