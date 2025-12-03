import ContactCard from "./ContactCard";
import "../styles/ContactList.css";

export default function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((c) => (
        <ContactCard
          key={c.id}
          contact={c}
          onEdit={() => onEdit(c)}
          onDelete={() => onDelete(c.id)}
        />
      ))}
    </div>
  );
}
