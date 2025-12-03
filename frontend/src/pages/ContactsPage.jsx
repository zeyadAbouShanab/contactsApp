import { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../api/contacts";
import ContactFormModal from "../components/ContactFormModal";
import ContactList from "../components/ContactList";
import "../styles/ContactsPage.css";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const load = () => getContacts().then(setContacts);

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container">
      <button
        className="add-btn"
        onClick={() => {
          setSelected(null);
          setOpen(true);
        }}
      >
        Add New
      </button>

      <ContactList
        contacts={contacts}
        onEdit={(contact) => {
          setSelected(contact);
          setOpen(true);
        }}
        onDelete={(id) => deleteContact(id).then(load)}
      />

      {open && (
        <ContactFormModal
          contact={selected}
          onClose={() => setOpen(false)}
          onSaved={load}
        />
      )}
    </div>
  );
}
