import reducer from './reducer';
import '@testing-library/jest-dom/extend-expect';
import { tabsItems } from '../../constants';

describe('tabsReducer', () => {
  const defaultStateValue = 'all';
  test('should return the initial state', () => {
    const action = { type: undefined };
    expect(reducer(undefined, action)).toEqual(defaultStateValue);
  });

  test('should change the tab', () => {
    const tab = Object.keys(tabsItems)[1];
    const action = { type: 'CHANGE_TAB', tab };
    expect(reducer(defaultStateValue, action)).toEqual(tab);
  });
});
