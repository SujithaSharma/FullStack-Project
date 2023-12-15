import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { WhypageComponent } from './components/whypage/whypage.component';
import { FormsModule } from '@angular/forms';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { HelpdeskComponent } from './components/helpdesk/helpdesk.component';
import { TermsandconditionsComponent } from './components/termsandconditions/termsandconditions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    WhypageComponent,
    AboutpageComponent,
    HelpdeskComponent,
    TermsandconditionsComponent,
    DashboardComponent,
    PricingComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
