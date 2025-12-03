package org.aboushanab.contacts.service;

import org.aboushanab.contacts.dto.ContactRequest;
import org.aboushanab.contacts.dto.ContactResponse;
import org.aboushanab.contacts.model.Contact;
import org.aboushanab.contacts.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public List<ContactResponse> getAllContacts() {
        return contactRepository.findAll()
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    public Optional<ContactResponse> getContactById(Long id) {
        return contactRepository.findById(id).map(this::toResponse);
    }

    public ContactResponse saveContact(ContactRequest request) {
        Contact contact = new Contact();
        contact.setName(request.name());
        contact.setEmail(request.email());
        contact.setPhone(request.phone());
        contact.setImageUrl(request.imageUrl());
        Contact saved = contactRepository.save(contact);
        return toResponse(saved);
    }

    public Optional<ContactResponse> updateContact(Long id, ContactRequest request, Boolean removeImage) {
        return contactRepository.findById(id)
                .map(existing -> {
                    existing.setName(request.name());
                    existing.setEmail(request.email());
                    existing.setPhone(request.phone());

                    if (Boolean.TRUE.equals(removeImage)) {
                        existing.setImageUrl(null);
                    } else if (request.imageUrl() != null) {
                        existing.setImageUrl(request.imageUrl());
                    }

                    return toResponse(contactRepository.save(existing));
                });
    }


    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }

    private ContactResponse toResponse(Contact contact) {
        return new ContactResponse(
                contact.getId(),
                contact.getName(),
                contact.getEmail(),
                contact.getPhone(),
                contact.getImageUrl()
        );
    }
}
