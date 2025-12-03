import { useState } from "react";
import DropdownMenu from "./Dropdown";
import "../styles/ContactCard.css";

export default function ContactCard({ contact, onEdit, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="contact-card">
      <div className="contact-left">
        <img
          src={
            contact.imageUrl
              ? `http://localhost:8080${contact.imageUrl}`
              : "/src/assets/placeholder.png"
          }
        />

        <div className="contact-info">
          <div className="name">{contact.name}</div>
          <div className="phone">{contact.phone}</div>
        </div>
      </div>

      <div className="contact-actions">
        <button onClick={() => setMenuOpen((prev) => !prev)}>…</button>
        {menuOpen && (
          <DropdownMenu
            items={[
              { label: "Edit", action: onEdit },
              { label: "Favorite", action: () => console.log("fav") },
              { label: "Remove", action: onDelete },
            ]}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
