import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsersComponent } from './components/users/users/users.component';
import { UserService } from './services/user.service';
import { EmployeeTypeComponent } from './components/users/employee-type/employee-type.component';
import { EmployeeTypeAddComponent } from './components/users/employee-type-add/employee-type-add.component';
import { CompanyComponent } from './components/company/company/company.component';
import { EmployeeTypeUpdateComponent } from './components/users/employee-type-update/employee-type-update.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'users', component: UsersComponent },
  { path: 'employeeTypes', component: EmployeeTypeComponent },
  { path: 'employeeTypes/addEmployeeType', component: EmployeeTypeAddComponent },
  { path: 'employeeTypes/updateEmployeeType/:id', component: EmployeeTypeUpdateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent,
    UsersComponent,
    EmployeeTypeComponent,
    EmployeeTypeAddComponent,
    CompanyComponent,
    EmployeeTypeUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,{enableTracing:true},
    ),
    NgbModule.forRoot(),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
