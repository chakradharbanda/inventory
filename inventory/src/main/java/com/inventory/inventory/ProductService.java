package com.inventory.inventory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public List<Product> getOutOfStockProducts() {
        return productRepository.findByQuantityLessThan(1);
    }
    
    public List<Product> getLowStockProducts(int threshold) {
        return productRepository.findByQuantityLessThan(threshold);
    }
    
}
