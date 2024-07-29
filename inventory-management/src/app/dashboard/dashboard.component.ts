import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, ChartModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  totalSales: number = 120000;
  productsInStock: number = 350;
  newOrders: number = 45;
  pendingRequests: number = 12;

  salesData: any = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [3000, 2500, 3500, 4000, 5000, 6000],
        borderColor: '#230aaf',
        backgroundColor: 'rgba(35, 10, 175, 0.2)',
      },
    ],
  };

  stockLevelsData: any = {
    labels: ['Electronics', 'Clothing', 'Home Appliances'],
    datasets: [
      {
        label: 'Stock Levels',
        data: [120, 90, 140],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      },
    ],
  };

  recentActivities: string[] = [
    'Order #1234 shipped',
    'New product added: Smart Watch',
    'Stock levels updated for Electronics',
    'Customer feedback received',
  ];

  ngOnInit(): void {
    // Initialize any data or call service methods if needed
  }
}
