import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AuthService } from "./services/auth.service";



//Angular material

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
} from '@angular/material';


// FireBase Configuration
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
//import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { environment } from '../environments/environment';


//Assets

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LoginFrontendComponent } from './components/frontend/login-frontend/login-frontend.component';
import { InicioFrontendComponent } from './components/frontend/inicio-frontend/inicio-frontend.component';
import { PanelFrontendComponent } from './components/frontend/panel-frontend/panel-frontend.component';
import { NuevoQRComponent } from './components/frontend/nuevo-qr/nuevo-qr.component';
import { EditarQRComponent } from './components/frontend/editar-qr/editar-qr.component';
import { PerfilComponent } from './components/frontend/perfil/perfil.component';
import { NavbarComponent } from './components/frontend/navbar/navbar.component';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { VerifyEmailComponent } from './components/frontend/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/frontend/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFrontendComponent,
    InicioFrontendComponent,
    PanelFrontendComponent,
    NuevoQRComponent,
    EditarQRComponent,
    PerfilComponent,
    NavbarComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    ChartsModule,
    NgQRCodeReaderModule,
    ZXingScannerModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
