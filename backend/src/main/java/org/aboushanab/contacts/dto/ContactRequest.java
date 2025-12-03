package org.aboushanab.contacts.dto;

public record ContactRequest(
        String name,
        String email,
        String phone,
        String imageUrl
) {}
