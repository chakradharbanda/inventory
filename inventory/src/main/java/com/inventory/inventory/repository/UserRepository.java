package com.inventory.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inventory.inventory.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}

