import { Component, OnInit } from '@angular/core';
import { InventoryService, Product } from '../../inventory.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { StyleClassModule } from 'primeng/styleclass';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    RouterModule,
    CheckboxModule,
    ReactiveFormsModule,
    InputTextModule,
    InputGroupAddonModule,
    InputGroupModule,
    StyleClassModule,
    HttpClientModule,
    CardModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  // products: Product[] = [];

  // constructor(private inventoryService: InventoryService) {}

  // ngOnInit(): void {
  //   this.inventoryService.getProducts().subscribe((products) => {
  //     this.products = products;
  //   });
  // }

  products: any[] = [];
  sortField: string = 'name';
  sortOrder: number = 1;

  ngOnInit() {
    // Sample data
    this.products = [
      { name: 'Product 1', category: 'Category 1', price: 29.99, stock: 100 },
      { name: 'Product 2', category: 'Category 2', price: 19.99, stock: 50 },
      { name: 'Product 3', category: 'Category 1', price: 39.99, stock: 20 },
      // Add more products as needed
    ];
  }

  onSort(event: any) {
    this.sortField = event.field;
    this.sortOrder = event.order;
  }

  editProduct(product: any) {
    // Logic for editing a product
    console.log('Edit product', product);
  }

  deleteProduct(product: any) {
    // Logic for deleting a product
    console.log('Delete product', product);
    this.products = this.products.filter(p => p !== product);
  }
}
