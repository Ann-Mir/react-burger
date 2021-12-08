import reducer, {clearOrderDetails} from './order-slice';

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
  number: null,
  name: null,
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

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should clear order', () => {
  expect(reducer({
    ...initialState,
    ingredients: [ingredient],
    number: 555,
    name: 'Бургер'
  }, clearOrderDetails())).toEqual(initialState)
});
