package com.inventory.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inventory.inventory.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
