export default function reducer(state = 'all', action) {
  if (action.type === 'CHANGE_TAB') {
    return action.tab;
  }
  return state;
}
