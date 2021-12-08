import reducer, {
  increaseQuantity,
  addBunQuantity,
  decreaseQuantity,
  clearQuantities
}  from './ingredients-slice';

const initialState = {
  ingredients: [],
  isLoading: true,
  error: null,
};

const bunIngredient = {
  _id: '60d3b41abdacab0026a733c6',
  name: 'Краторная булка N-200i',
  type: 'bun',
  calories: 420,
  carbohydrates: 53,
  fat: 24,
  price: 1255,
  proteins: 80,
  __v: 0,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  imageLarge: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
  imageMobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
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

test('should increase ingredient count by 1', () => {
  expect(reducer({
    ...initialState,
    ingredients: [{...ingredient, count: 2}],
  }, increaseQuantity(ingredient))).toEqual({
    ...initialState,
    ingredients: [{...ingredient, count: 3}]
  })
});

test('should decrease ingredient count by 1', () => {
  expect(reducer({
    ...initialState,
    ingredients: [{...ingredient, count: 2}],
  }, decreaseQuantity(ingredient))).toEqual({
    ...initialState,
    ingredients: [{...ingredient, count: 1}]
  })
});

test('should set bun count to 2', () => {
  expect(reducer({
    ...initialState,
    ingredients: [bunIngredient],
  }, addBunQuantity(bunIngredient))).toEqual({
    ...initialState,
    ingredients: [{...bunIngredient, count: 2}]
  })
});


test('should delete ingredient quantity', () => {
  expect(reducer({
    ...initialState,
    ingredients: [{...ingredient, count: 2}],
  }, clearQuantities())).toEqual({
    ...initialState,
    ingredients: [ingredient]
  })
});
