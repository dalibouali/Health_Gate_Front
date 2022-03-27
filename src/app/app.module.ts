import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LoginComponent } from './page-login/page-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

/*import { authInterceptorProviders } from './_helpers/auth.interceptor';*/

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {path: 'register', component:RegistrationComponent},
  {path:'home', component:HomeComponent},
  {path:'**', component:NotFoundComponent}
];
@NgModule({
  declarations: [


    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent
  ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatMenuModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
