export default function reducer(state = 'anonymous', action) {
  if (action.type === 'ENTER_NAME') return action.text;
  return state;
}
