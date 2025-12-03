import { useState } from "react";
import { createContact, updateContact } from "../api/contacts";
import "../styles/ContactForm.css";

export default function ContactFormModal({ contact, onClose, onSaved }) {
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [phone, setPhone] = useState(contact?.phone || "");
  const [file, setFile] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);

    if (removeImage) {
      formData.append("removeImage", "true");
    } else if (file) {
      formData.append("file", file);
    }

    try {
      if (contact) {
        await updateContact(contact.id, formData);
      } else {
        await createContact(formData);
      }
      onSaved();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{contact ? "Edit Contact" : "Add Contact"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="current-image">
            <img
              src={
                removeImage
                  ? "/placeholder.png"
                  : file
                  ? URL.createObjectURL(file)
                  : contact?.imageUrl
                  ? `http://localhost:8080${contact.imageUrl}`
                  : "/src/assets/placeholder.png"
              }
            />
            <div className="image-buttons">
              <label className="change-btn">
                {file || contact?.imageUrl
                  ? "Change Picture"
                  : "Upload Picture"}
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setRemoveImage(false);
                  }}
                />
              </label>
              {(contact?.imageUrl || file) && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => {
                    setFile(null);
                    setRemoveImage(true);
                  }}
                >
                  Remove Picture
                </button>
              )}
            </div>
          </div>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <div className="modal-actions">
            <button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
