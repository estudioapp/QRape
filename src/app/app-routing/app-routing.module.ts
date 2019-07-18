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
import { AgregarContenidoQRComponent } from '../components/frontend/agregar-contenido-qr/agregar-contenido-qr.component';
import { EditarQRComponent } from '../components/frontend/editar-qr/editar-qr.component';
import { InicioAppComponent } from '../inicio-app/inicio-app.component';
import { NavbarComponent } from '../components/frontend/navbar/navbar.component';
import { DocumentacionComponent } from '../components/frontend/documentacion/documentacion.component';
import { PremiumComponent } from '../components/frontend/premium/premium.component';
import { TerminosYCondicionesComponent } from '../components/frontend/terminos-ycondiciones/terminos-ycondiciones.component';
import { ChangePasswordComponent } from '../components/frontend/change-password/change-password.component';


const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'},
  { path: '', component: NavbarComponent,
  children: [
    { path: 'panel', component:  PanelFrontendComponent },
    { path: 'perfil', component: PerfilComponent  },
    { path: 'documentos', component:DocumentacionComponent},
    { path: 'premium', component: PremiumComponent  },
    { path: 'cambiar-contra', component:ChangePasswordComponent}
  ]},
  { path: 'login', component: LoginFrontendComponent  },
  { path: 'admin8291/login', component: LoginBackComponent  },
  { path: 'admin8291/panel', component: PanelBackendComponent  },
  { path: 'admin8291/nuevosQR', component: NuevoQRComponent  },
  { path: 'admin8291/listadoQR', component: ListadoQRadmComponent  },  
  { path: 'registro', component: LoginFrontendComponent  }, 
  { path: 'vista/:key', component: VisorQRComponent }, 
  { path: 'panel', component: PanelFrontendComponent  },
  { path: 'intro', component: InicioAppComponent  },
  { path: 'agregarQR/:key', component: AgregarContenidoQRComponent  },
  { path: 'editarQR/:key', component: EditarQRComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'terminos-y-condiciones', component: TerminosYCondicionesComponent }

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
