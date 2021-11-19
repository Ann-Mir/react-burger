export const TABS = {
  bun: 'Булки',
  main: 'Начинки',
  sauce: 'Соусы',
};

export const BASE_URL = 'https://norma.nomoreparties.space/api';

export const ApiRoutes = {
  INGREDIENTS: '/ingredients',
  ORDERS: '/orders',
  PASSWORD_RESET: '/password-reset',
  REGISTER: '/register',
  AUTH: '/auth',
  RESET: '/reset',
  LOGIN: '/login',
  LOGOUT: '/logout',
  TOKEN: '/token',
  USER: '/user',
};

export const AppRoutes = {
  ROOT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  INGREDIENTS: '/ingredients/:id',
  LOGOUT: '/logout',
  NOT_FOUND: '/not-found',
  FEED: '/feed',
  FEED_ORDER: '/feed/:id',
  ORDERS: '/profile/orders',
  ORDERS_ORDER: '/profile/orders/:id',
};

export const BASE_SOCKET_URL = 'wss://norma.nomoreparties.space/orders';

export const SocketRoutes = {
  ALL: '/all',
};

export const OrderStatus = {
  done: 'Выполнен',
  pending: 'Готовится',
  created: 'Создан',
};
