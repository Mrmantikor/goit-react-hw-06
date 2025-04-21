import "./App.scss";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <a
        className="signature"
        href="https://github.com/Mrmantikor"
        target="_blank"
      >
        Bohdan Vasylovych
      </a>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
