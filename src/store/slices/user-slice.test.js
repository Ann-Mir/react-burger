import reducer from './user-slice';

const initialState = {
  isLoading: false,
  error: null,
  success: false,
  email: '',
  name: '',
  isAuthenticated: false,
  message: null,
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});
