import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InventoryService } from '../inventory.service';
import { MessageService } from 'primeng/api';

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
    ReactiveFormsModule,
  ],
  templateUrl: './catergory.component.html',
  styleUrl: './catergory.component.scss',
})
export class CatergoryComponent implements OnInit {
  categories: any[] = [];
  showDialog: boolean = false;
  newCategory: any = { name: '', description: '' };
  categoryForm!: FormGroup;

  constructor(
    private inventoryService: InventoryService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.getCategories();
  }

  getCategories(): void {
    this.inventoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSubmit() {
    if (this.categoryForm?.valid) {
      console.log('Form Submitted', this.categoryForm.value);
      this.inventoryService
        .addCategory(this.categoryForm.value)
        .subscribe((res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Product added successfully!',
          });
          this.showDialog = false;
          this.getCategories();
        });
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
