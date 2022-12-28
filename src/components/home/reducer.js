export default function reducer(state = 'anonymous', action) {
  if (action.type === 'ENTER_NAME') return action.text ? action.text : 'anonymous';
  return state;
}
