import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { InicioFrontendComponent } from '../components/frontend/inicio-frontend/inicio-frontend.component';
import { LoginFrontendComponent } from '../components/frontend/login-frontend/login-frontend.component';
import { PanelFrontendComponent } from '../components/frontend/panel-frontend/panel-frontend.component';
import { PerfilComponent } from '../components/frontend/perfil/perfil.component';
import { ForgotPasswordComponent } from '../components/frontend/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../components/frontend/verify-email/verify-email.component';
import { LoginBackComponent } from '../components/backend/login-back/login-back.component';
import { NuevoQRComponent } from '../components/backend/nuevo-qr/nuevo-qr.component';
import { ListadoQRadmComponent } from '../components/backend/listado-qradm/listado-qradm.component';
import { PanelBackendComponent } from '../components/backend/panel-backend/panel-backend.component';
import { VisorQRComponent } from '../components/frontend/visor-qr/visor-qr.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: InicioFrontendComponent  },
  { path: 'login', component: LoginFrontendComponent  },
  { path: 'admin8291/login', component: LoginBackComponent  },
  { path: 'admin8291/panel', component: PanelBackendComponent  },
  { path: 'admin8291/nuevosQR', component: NuevoQRComponent  },
  { path: 'admin8291/listadoQR', component: ListadoQRadmComponent  },  
  { path: 'registro', component: LoginFrontendComponent  }, 
  { path: 'vista/:key', component: VisorQRComponent }, 
  { path: 'panel', component: PanelFrontendComponent  },
  { path: 'perfil', component: PerfilComponent  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})

export class AppRoutingModule {}
