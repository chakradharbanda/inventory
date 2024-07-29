import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    CheckboxModule,
  ],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.scss',
})
export class GeneralSettingsComponent implements OnInit {
  settings: any = {
    siteTitle: '',
    siteEmail: '',
    maxItemsPerPage: 10,
    enableFeature: false,
  };

  ngOnInit(): void {
    // Load initial settings if necessary
    this.loadSettings();
  }

  loadSettings() {
    // Placeholder for loading settings, e.g., from an API or local storage
    this.settings = {
      siteTitle: 'My Application',
      siteEmail: 'contact@myapp.com',
      maxItemsPerPage: 20,
      enableFeature: true,
    };
  }

  onSubmit() {
    // Handle form submission
    console.log('Settings saved:', this.settings);
    this.saveSettings();
  }

  saveSettings() {
    // Logic to save settings, e.g., to an API or local storage
    console.log('Settings saved:', this.settings);
  }
}
