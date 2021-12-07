import reducer, {
  setIngredient,
  removeIngredient
} from './ingredient-slice';


const initialState = {
  imageLarge: '',
  name: '',
  calories: '',
  proteins: '',
  fat: '',
  carbohydrates: '',
};

const ingredient = {
  name: 'Филе Люминесцентного тетраодонтимформа',
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  imageLarge: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should set ingredient', () => {
  expect(reducer(initialState, setIngredient(ingredient))).toEqual({
    ...initialState,
    name: 'Филе Люминесцентного тетраодонтимформа',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    imageLarge: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
  })
});

test('should remove ingredient', () => {
  expect(reducer({
    ...initialState,
    name: 'Филе Люминесцентного тетраодонтимформа',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    imageLarge: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
  }, removeIngredient())).toEqual(initialState)
});
