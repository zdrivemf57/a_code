export default function Child({ funcToChild }) {
  funcToChild("Hello from child");
  return <h2>Child</h2>;
}