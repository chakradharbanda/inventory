import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-catergory',
  standalone: true,
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    CardModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
  ],
  templateUrl: './catergory.component.html',
  styleUrl: './catergory.component.scss',
})
export class CatergoryComponent implements OnInit {
  categories: any[] = [];
  showDialog: boolean = false;
  newCategory: any = { name: '', description: '' };

  ngOnInit(): void {
    // Sample data
    this.categories = [
      { name: 'Electronics', description: 'Devices and gadgets' },
      { name: 'Clothing', description: 'Apparel and accessories' },
      { name: 'Home Appliances', description: 'Appliances for home use' },
    ];
  }

  onSubmit() {
    if (this.newCategory.name) {
      this.categories.push({ ...this.newCategory });
      this.newCategory = { name: '', description: '' };
      this.showDialog = false;
    }
  }

  editCategory(category: any) {
    // Logic for editing a category
    console.log('Edit category', category);
  }

  deleteCategory(category: any) {
    // Logic for deleting a category
    console.log('Delete category', category);
    this.categories = this.categories.filter((c) => c !== category);
  }
}
