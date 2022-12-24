import store from '../../store';

export default function TodoList() {
  const { name } = store.getState();
  return <header>Hi, {name} it&apos;s your TODO list</header>;
}
