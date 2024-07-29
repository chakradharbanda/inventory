import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { StyleClassModule } from 'primeng/styleclass';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  product = {
    name: '',
    category: '',
    price: null,
    stock: null,
  };

  categories = [
    { name: 'Electronics', code: 'ELEC' },
    { name: 'Clothing', code: 'CLO' },
    { name: 'Home Appliances', code: 'HOME' },
    // Add more categories as needed
  ];

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  onSubmit() {
    // Handle form submission
    console.log('Product added:', this.product);
    // You would typically send this data to a server here
  }

  onCancel() {
    // Handle form cancellation
    console.log('Form cancelled');
    // Optionally navigate back or reset the form
  }
}
