import reducer from './reducer';
import '@testing-library/jest-dom/extend-expect';

describe('taskReducer', () => {
  const defaultStateValue = { nextTaskKey: 0, data: [] };
  const task1 = 'New task 1';
  const task2 = 'New task 2';
  const stateAfterAdditionFirstTask = {
    nextTaskKey: 1,
    data: [{ key: 0, text: task1, isActive: true }],
  };
  const stateAfterAdditionSecondTask = {
    nextTaskKey: 2,
    data: [
      { key: 0, text: task1, isActive: true },
      { key: 1, text: task2, isActive: true },
    ],
  };
  test('should return the initial state', () => {
    const action = { type: undefined };
    expect(reducer(undefined, action)).toEqual(defaultStateValue);
  });

  test('should add new task', () => {
    const action1 = { type: 'ADD_NEW_TASK', text: task1 };
    const action2 = { type: 'ADD_NEW_TASK', text: task2 };
    expect(reducer(defaultStateValue, action1)).toEqual(stateAfterAdditionFirstTask);
    expect(reducer(stateAfterAdditionFirstTask, action2)).toEqual(stateAfterAdditionSecondTask);
  });

  test('should edit task', () => {
    const editedText = 'Changed task 2';
    const action = { type: 'EDIT_TASK', data: { index: 1, text: editedText } };
    const stateAfterEditingSecondTask = {
      nextTaskKey: 2,
      data: [
        { key: 0, text: task1, isActive: true },
        { key: 1, text: editedText, isActive: true },
      ],
    };
    expect(reducer(stateAfterAdditionSecondTask, action)).toEqual(stateAfterEditingSecondTask);
  });
  test('should delete task', () => {
    const action = { type: 'DELETE_TASK', index: 0 };
    const stateAfterDeletingFirstTask = {
      nextTaskKey: 2,
      data: [{ key: 1, text: task2, isActive: true }],
    };
    expect(reducer(stateAfterAdditionSecondTask, action)).toEqual(stateAfterDeletingFirstTask);
  });

  test('should change task status', () => {
    const action = { type: 'CHANGE_TASK_STATUS', index: 0 };
    const stateAfterChangingFirstTaskStatus = {
      nextTaskKey: 2,
      data: [
        { key: 0, text: task1, isActive: false },
        { key: 1, text: task2, isActive: true },
      ],
    };
    expect(reducer(stateAfterAdditionSecondTask, action)).toEqual(
      stateAfterChangingFirstTaskStatus
    );
    expect(reducer(stateAfterChangingFirstTaskStatus, action)).toEqual(
      stateAfterAdditionSecondTask
    );
  });
});
