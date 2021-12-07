import reducer, {
  addIngredient,
  removeConstructorIngredient,
  addBun,
  removeBun,
  clearOrder,
  swapIngredients
} from './burger-constructor-slice';

const initialState = {
  ingredients: [],
  bun: null,
  totalPrice: 0,
};

const secondIngredient = {
  _id: '60d3b41abdacab0026a733c9',
  name: 'Мясо бессмертных моллюсков Protostomia',
  type: 'main',
  proteins: 433,
  fat: 244,
  carbohydrates: 33,
  calories: 420,
  price: 1337,
  image: 'https://code.s3.yandex.net/react/code/meat-02.png',
  __v: 0,
  imageLarge: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
  imageMobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png',
};

const bunIngredient = {
  _id: '60d3b41abdacab0026a733c6',
  name: 'Краторная булка N-200i',
  type: 'bun',
  calories: 450,
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

test('should add ingredient and increase total price', () => {
  expect(reducer(initialState, addIngredient(ingredient)))
    .toEqual({
    ...initialState,
    ingredients: [{...ingredient, constructorId: 0}],
    totalPrice: ingredient.price,
  })
});

test('should remove ingredient and decrease total price', () => {
  expect(reducer({
    ...initialState,
    ingredients: [ingredient],
    totalPrice: ingredient.price,
  }, removeConstructorIngredient(ingredient))).toEqual({
    ...initialState,
    ingredients: [],
    totalPrice: 0,
  })
});


test('should add bun and bun price to state', () => {
  expect(reducer(initialState, addBun(bunIngredient))).toEqual({
    ...initialState,
    bun: bunIngredient,
    totalPrice: bunIngredient.price * 2,
  })
});

test('should remove bun and bun price from state', () => {
  expect(reducer({
    ...initialState,
    bun: bunIngredient,
    totalPrice: bunIngredient.price * 2,
  }, removeBun(ingredient))).toEqual({
    ...initialState,
    bun: null,
    totalPrice: 0,
  })
});

test('should clear order', () => {
  expect(reducer({
    ...initialState,
    ingredients: [ingredient, secondIngredient],
    bun: bunIngredient,
    totalPrice: bunIngredient.price * 2,
  }, clearOrder())).toEqual({
    ...initialState,
    ingredients: [],
    bun: null,
    totalPrice: 0,
  })
});

test('should swap ingredients', () => {
  expect(reducer({
    ...initialState,
    ingredients: [ingredient, secondIngredient],
    bun: bunIngredient,
    totalPrice: bunIngredient.price * 2,
  }, swapIngredients({from: 0, to: 1}))).toEqual({
    ...initialState,
    ingredients: [secondIngredient, ingredient],
    bun: bunIngredient,
    totalPrice: bunIngredient.price * 2,
  })
});
