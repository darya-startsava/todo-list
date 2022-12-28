import './header.css'

export default function Header(props) {
  const { name, count } = props;
  return (
    <header className="header">
      <p>
        Hi, <span>{name}</span> it&apos;s your TODO list.
      </p>
      <p>
        You have <span>{count}</span> active tasks.
      </p>
    </header>
  );
}
