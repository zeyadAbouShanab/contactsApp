export async function createContact(formData) {
  const res = await fetch("http://localhost:8080/contacts", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to create contact");
  return res.json();
}

export async function updateContact(id, formData) {
  const res = await fetch(`http://localhost:8080/contacts/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to update contact");
  return res.json();
}

export async function getContacts() {
  const res = await fetch("http://localhost:8080/contacts");
  if (!res.ok) throw new Error("Failed to fetch contacts");
  return res.json();
}

export async function deleteContact(id) {
  const res = await fetch(`http://localhost:8080/contacts/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete contact");
}
