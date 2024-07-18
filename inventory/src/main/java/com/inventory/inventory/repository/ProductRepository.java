package com.inventory.inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inventory.inventory.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByQuantityLessThan(int quantity);

}
