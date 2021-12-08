import reducer from './password-slice';

const initialState = {
  isLoading: false,
  error: null,
  success: false,
  passwordIsChanged: false,
  isEmailConfirmed: false,
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});
