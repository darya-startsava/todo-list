export default function Button(props) {
  const { type, children } = props;
  return <button type={type}>{children}</button>;
}
