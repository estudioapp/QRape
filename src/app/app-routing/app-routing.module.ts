import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { PlataformasComponent } from '../frontend/plataformas/plataformas.component';
import { NewPlataformaComponent } from '../frontend/new-plataforma/new-plataforma.component';
import { BackendStandardComponent } from '../backend/backend-standard/backend-standard.component';
import { ValidateComponent } from '../frontend/validate/validate.component';
import { LoginComponent } from '../backend/login/login.component';
import { SidenavComponent } from '../backend/sidenav/sidenav.component';
import { InicioComponent } from '../backend/inicio/inicio.component';
import { ClientesComponent } from '../clientes/clientes.component';
import { NotificacionesComponent } from '../backend/notificaciones/notificaciones.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: PlataformasComponent  },
  { path: 'creando-tienda', component: NewPlataformaComponent},
  { path: 'cliente-backend',component: BackendStandardComponent},
  { path: 'login', component: ValidateComponent},
  { path: 'backend/login', component: LoginComponent},
  { path: 'backend', component: SidenavComponent,
  children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full'},
      { path: 'inicio', component: InicioComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'notificaciones', component: NotificacionesComponent },      
  ]},
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