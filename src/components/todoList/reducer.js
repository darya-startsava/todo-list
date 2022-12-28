export default function reducer(state = { nextTaskKey: 0, data: [] }, action) {
  if (action.type === 'ADD_NEW_TASK') {
    return {
      nextTaskKey: state.nextTaskKey + 1,
      data: [...state.data, { key: state.nextTaskKey, text: action.text, isActive: true }],
    };
  }
  if (action.type === 'EDIT_TASK') {
    const newData = [];
    state.data.forEach((i) => {
      if (i.key === action.data.index) {
        newData.push({ ...i, text: action.data.text });
      } else {
        newData.push(i);
      }
    });
    return {
      nextTaskKey: state.nextTaskKey,
      data: newData,
    };
  }
  if (action.type === 'DELETE_TASK') {
    const newData = [];
    state.data.forEach((i) => {
      if (i.key !== action.index) {
        newData.push(i);
      }
    });
    return {
      nextTaskKey: state.nextTaskKey,
      data: newData,
    };
  }
  return state;
}
