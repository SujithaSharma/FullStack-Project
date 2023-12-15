import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { WhypageComponent } from './components/whypage/whypage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { authGuard } from './services/auth.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [authGuard] },
  { path: "employee/new", component: EmployeeCreateComponent, canActivate: [authGuard] },
  { path: "employee/list", component: EmployeeListComponent, canActivate: [authGuard] },
  { path: "employee/update/:id", component: EmployeeUpdateComponent, canActivate: [authGuard] },
  { path: "why", component: WhypageComponent },
  { path: "about", component: AboutpageComponent },
  { path: "register", component: RegisterComponent },
  { path: "pricing", component: PricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  isLogged = false
}
