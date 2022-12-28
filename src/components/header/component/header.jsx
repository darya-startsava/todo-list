export default function Header(props) {
  const { name, count } = props;
  return (
    <>
      <p>Hi, {name} it&apos;s your TODO list</p>
      <p>You have {count} active tasks.</p>
    </>
  );
}
