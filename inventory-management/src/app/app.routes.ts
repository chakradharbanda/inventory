import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CatergoryComponent } from './catergory/catergory.component';
import { StockLevelsComponent } from './stock-levels/stock-levels.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'products/add', component: ProductsComponent },
  { path: 'products/categories', component: CatergoryComponent },
  { path: 'products/stock', component: StockLevelsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings/general', component: GeneralSettingsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
