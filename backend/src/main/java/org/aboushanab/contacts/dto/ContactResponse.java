package org.aboushanab.contacts.dto;

public record ContactResponse(
        Long id,
        String name,
        String email,
        String phone,
        String imageUrl
) {}
