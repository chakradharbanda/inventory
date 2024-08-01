import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
// import { Product } from './product.model';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.scss',
})
export class ProductDialogComponent implements OnInit, OnChanges {
  @Input() display: boolean = false;
  @Input() product: any;
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      this.updateForm(changes['product'].currentValue);
    }
  }

  initForm(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      quantity: [0, [Validators.required, Validators.min(0)]],
    });
  }

  updateForm(product: any): void {
    if (this.productForm) {
      this.productForm.patchValue(product);
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.onClose.emit(this.productForm.value);
      this.display = false;
    }
  }

  onCancel() {
    this.onClose.emit(null);
    this.display = false;
  }
}
