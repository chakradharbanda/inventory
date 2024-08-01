import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { MenuItem, MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PanelMenuModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    MenubarModule,
    CardModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inventory-management';
  menuItems: any[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/dashboard'],
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-tags',
        items: [
          {
            label: 'Product List',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/products'],
          },
          {
            label: 'Add New Product',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/products/add'],
          },
          {
            label: 'Categories',
            icon: 'pi pi-fw pi-th-large',
            routerLink: ['/products/categories'],
          },
          {
            label: 'Brands',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/products/brands'],
          },
          {
            label: 'Stock Levels',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['/products/stock'],
          },
          {
            label: 'Inventory Adjustment',
            icon: 'pi pi-fw pi-refresh',
            routerLink: ['/products/adjustment'],
          },
          {
            label: 'Import/Export Products',
            icon: 'pi pi-fw pi-upload',
            routerLink: ['/products/import-export'],
          },
        ],
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {
            label: 'Order List',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/orders'],
          },
          {
            label: 'Create New Order',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/orders/create'],
          },
          {
            label: 'Order Fulfillment',
            icon: 'pi pi-fw pi-truck',
            routerLink: ['/orders/fulfillment'],
          },
          {
            label: 'Returns and Refunds',
            icon: 'pi pi-fw pi-undo',
            routerLink: ['/orders/returns'],
          },
          {
            label: 'Invoices',
            icon: 'pi pi-fw pi-file',
            routerLink: ['/orders/invoices'],
          },
          {
            label: 'Order Tracking',
            icon: 'pi pi-fw pi-map-marker',
            routerLink: ['/orders/tracking'],
          },
        ],
      },
      {
        label: 'Customers',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Customer List',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/customers'],
          },
          {
            label: 'Add New Customer',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/customers/add'],
          },
          {
            label: 'Customer Groups',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/customers/groups'],
          },
          {
            label: 'Customer Orders',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/customers/orders'],
          },
          {
            label: 'Customer Feedback',
            icon: 'pi pi-fw pi-comment',
            routerLink: ['/customers/feedback'],
          },
          {
            label: 'Loyalty Programs',
            icon: 'pi pi-fw pi-star',
            routerLink: ['/customers/loyalty'],
          },
        ],
      },
      {
        label: 'Suppliers',
        icon: 'pi pi-fw pi-building',
        items: [
          {
            label: 'Supplier List',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/suppliers'],
          },
          {
            label: 'Add New Supplier',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/suppliers/add'],
          },
          {
            label: 'Purchase Orders',
            icon: 'pi pi-fw pi-clipboard',
            routerLink: ['/suppliers/purchase-orders'],
          },
          {
            label: 'Supplier Products',
            icon: 'pi pi-fw pi-box',
            routerLink: ['/suppliers/products'],
          },
          {
            label: 'Supplier Contracts',
            icon: 'pi pi-fw pi-file',
            routerLink: ['/suppliers/contracts'],
          },
        ],
      },
      {
        label: 'Warehouse Management',
        icon: 'pi pi-fw pi-box',
        items: [
          {
            label: 'Warehouse List',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/warehouses'],
          },
          {
            label: 'Stock Transfers',
            icon: 'pi pi-fw pi-exchange',
            routerLink: ['/warehouses/stock-transfers'],
          },
          {
            label: 'Location Management',
            icon: 'pi pi-fw pi-map',
            routerLink: ['/warehouses/locations'],
          },
          {
            label: 'Inventory Audits',
            icon: 'pi pi-fw pi-search',
            routerLink: ['/warehouses/audits'],
          },
          {
            label: 'Warehouse Settings',
            icon: 'pi pi-fw pi-cog',
            routerLink: ['/warehouses/settings'],
          },
        ],
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'General Settings',
            icon: 'pi pi-fw pi-cog',
            routerLink: ['/settings/general'],
          },
          {
            label: 'Notification Settings',
            icon: 'pi pi-fw pi-bell',
            routerLink: ['/settings/notifications'],
          },
          {
            label: 'System Preferences',
            icon: 'pi pi-fw pi-sliders-h',
            routerLink: ['/settings/preferences'],
          },
          {
            label: 'Integrations',
            icon: 'pi pi-fw pi-plug',
            routerLink: ['/settings/integrations'],
          },
          {
            label: 'Login',
            icon: 'pi pi-fw pi-save',
            routerLink: ['/login'],
          },
        ],
      },
    ];
  }
}
