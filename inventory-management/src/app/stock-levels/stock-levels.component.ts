import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'app-stock-levels',
  standalone: true,
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputNumberModule],
  templateUrl: './stock-levels.component.html',
  styleUrl: './stock-levels.component.scss'
})
export class StockLevelsComponent implements OnInit {
  products: any[] = [];

  ngOnInit(): void {
    // Sample data
    this.products = [
      { name: 'Product A', stock: 100, newStock: 100 },
      { name: 'Product B', stock: 200, newStock: 200 },
      { name: 'Product C', stock: 150, newStock: 150 }
    ];
  }

  saveStock(product: any) {
    // Update the stock level
    if (product.newStock !== null) {
      product.stock = product.newStock;
      // Reset newStock after saving
      product.newStock = null;
    }
  }

  resetStock(product: any) {
    // Reset the newStock input field
    product.newStock = product.stock;
  }

  updateStock() {
    // Logic for batch updating stock levels can be implemented here
    console.log('Batch update stock levels');
  }
}