export default function reducer(state="name", action) {
  if (action.type === "ENTER_NAME")
    return action.text;
  return state;
}