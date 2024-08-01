import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryService, Product } from '../../inventory.service';
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
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProductDialogComponent } from '../../product-dialog/product-dialog.component';

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
    CardModule,
    DialogModule,
    InputNumberModule,
    ProductDialogComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  sortField: string = 'name';
  sortOrder: number = 1;
  showDialog: boolean = false;
  productForm!: FormGroup;
  categories = [{ name: 'Category1' }, { name: 'Category2' }]; // Example categories
  @ViewChild(ProductDialogComponent)
  selectedProduct: any;
  displayDialog: boolean = false;

  constructor(
    private inventoryService: InventoryService,
    private fb: FormBuilder,
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
    this.inventoryService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onSort(event: any) {
    this.sortField = event.field;
    this.sortOrder = event.order;
  }

  editProduct(product?: any) {
    // Logic for editing a product
    console.log('Edit product', product);

    this.selectedProduct = product;
    this.displayDialog = true;
  }

  deleteProduct(product: any) {
    // Logic for deleting a product
    console.log('Delete product', product);
    this.products = this.products.filter((p) => p !== product);
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
            detail: 'Product edited successfully!',
          });
        });
    }
  }

  onDialogClose(updatedProduct: Product) {
    this.selectedProduct = null;
    this.displayDialog = false;
    if (updatedProduct) {
      // Handle the updated product data, e.g., update the products list
      console.log('Updated Product:', updatedProduct);
    }
  }
}
