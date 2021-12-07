import {TABS} from '../../utils/constants';
import reducer, {setActiveTab, setDefault} from './tab-slice';


const initialState = {
  activeTab: TABS.bun,
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should set active tab', () => {
  expect(reducer(initialState, setActiveTab(TABS.sauce))).toEqual({
    ...initialState,
    activeTab: TABS.sauce
  })
});

test('should set default tab', () => {
  expect(reducer({
    ...initialState,
    activeTab: TABS.sauce
  }, setDefault())).toEqual({
    ...initialState,
    activeTab: TABS.bun
  })
});
