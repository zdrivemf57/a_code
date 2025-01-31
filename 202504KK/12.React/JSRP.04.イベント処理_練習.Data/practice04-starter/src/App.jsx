import ButtonList from "./components/ButtonList";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="container mt-4">
      <h1>React とイベント処理</h1>
      <hr />
      <ButtonList />
      <hr />
      <ContactForm />
    </div>
  );
}
