import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.scss";
import { selectContacts } from "../../redux/selectors";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles["contacts-grid"]}>
      {filteredContacts.map(({ id, number, name }) => (
        <Contact key={id} id={id} number={number} name={name} />
      ))}
    </ul>
  );
};

export default ContactList;
