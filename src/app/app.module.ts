import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';



import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { LoginComponent } from './page-login/page-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from "@angular/material/menu";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { TableDoctorsComponent } from './table-doctors/table-doctors.component';


import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { MedicalFileComponent } from './medical-file/medical-file.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { MedicinqComponent } from './medicinq/medicinq.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { AppComponent } from './app.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


import { DoctorComponent } from './doctor/doctor.component';
import { FilterPipe } from './filter.pipe';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { MydoctorsComponent } from './mydoctors/mydoctors.component';
import { MyOfficeComponent } from './myoffice/myoffice.component';
import { RegisterbisComponent } from './registerbis/registerbis.component';
import { DiabetesTestComponent } from './diabetes-test/diabetes-test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DoctorDashComponent } from './doctor-dash/doctor-dash.component';
import { HeartTestComponent } from './heart-test/heart-test.component';
import { MypatientsComponent } from './mypatients/mypatients.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';





/*import { authInterceptorProviders } from './_helpers/auth.interceptor';*/

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'registerbis', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'doctors', component: DoctorsComponent },

  { path: 'admin/doctors', component: TableDoctorsComponent },
  { path: 'medicalfile', component: MedicalFileComponent },
  { path: 'diseases', component: DiseasesComponent },
  { path: 'medicins', component: MedicinqComponent },
  { path: 'myoffice', component: MyOfficeComponent },

  { path: 'register', component: RegisterbisComponent },
  { path: 'mydoctors', component: MydoctorsComponent },
  { path: 'doctor/dashboard', component: DoctorDashComponent },
  { path: 'doctor/ai/diabetes', component: DiabetesTestComponent },
  { path: 'doctor/ai/heart', component: HeartTestComponent },
  { path: 'doctor/patients', component: MypatientsComponent },

  { path: 'doctorDetails/:id', component: DoctorDetailsComponent },
  { path: 'patientDetails/:id', component: PatientDetailsComponent },

  { path: 'admin/doctors', component: TableDoctorsComponent },


  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ProfileComponent,
    ServicesComponent,
    AppointmentComponent,
    DepartmentsComponent,
    DoctorsComponent,
    TableDoctorsComponent,
    ProfileDropdownComponent,

    MedicalFileComponent,
    DiseasesComponent,
    MedicinqComponent,



    DoctorComponent,
    FilterPipe,
    DoctorDetailsComponent,
    MydoctorsComponent,
    MyOfficeComponent,
    RegisterbisComponent,
    DiabetesTestComponent,
    SidebarComponent,
    DoctorDashComponent,
    HeartTestComponent,
    MypatientsComponent,
    PatientDetailsComponent,


  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

    NgbModule,
    FullCalendarModule




  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MyOfficeComponent]
})
export class AppModule { }
