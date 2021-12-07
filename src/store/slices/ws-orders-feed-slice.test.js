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

const ingredient = {
  _id: '60d3b41abdacab0026a733c8',
  name: 'Филе Люминесцентного тетраодонтимформа',
  type: 'main',
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  price: 988,
  image: 'https://code.s3.yandex.net/react/code/meat-03.png',
  __v: 0,
  imageLarge: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
  imageMobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
};

const order = {
  ingredients: ['ingredient'],
  _id: 1,
  status: 'done',
  number: 5,
  createdAt: '30.05.2021',
  updatedAt: '31.05.2021',
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
