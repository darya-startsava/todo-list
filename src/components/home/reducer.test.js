import reducer from './reducer';
import '@testing-library/jest-dom/extend-expect';

describe('nameReducer', () => {
  const defaultStateValue = 'anonymous';
  test('should return the initial state', () => {
    const action = { type: undefined };
    expect(reducer(undefined, action)).toEqual(defaultStateValue);
  });

  test('should save entered name', () => {
    const name = 'test name';
    const action = { type: 'ENTER_NAME', text: name };
    expect(reducer(defaultStateValue, action)).toEqual(name);
  });
});
