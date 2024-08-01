import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
import { InventoryService } from '../inventory.service';
import { MessageService } from 'primeng/api';

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
    ReactiveFormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  productForm!: FormGroup;
  categories = [{ name: 'Category1' }, { name: 'Category2' }]; // Example categories

  constructor(
    private fb: FormBuilder,
    private inventoryService: InventoryService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [
        0,
        [Validators.required, Validators.min(0), Validators.max(10000)],
      ],
      quantity: [
        0,
        [Validators.required, Validators.min(0), Validators.max(10000)],
      ],
    });
  }

  onSubmit(): void {
    if (this.productForm?.valid) {
      console.log('Form Submitted', this.productForm.value);
      this.inventoryService
        .addProduct(this.productForm.value)
        .subscribe((res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Product added successfully!',
          });
        });
    }
  }

  onCancel(): void {
    this.productForm?.reset();
  }
}
