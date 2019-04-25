import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { InicioFrontendComponent } from '../components/frontend/inicio-frontend/inicio-frontend.component';
import { LoginFrontendComponent } from '../components/frontend/login-frontend/login-frontend.component';
import { PanelFrontendComponent } from '../components/frontend/panel-frontend/panel-frontend.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: InicioFrontendComponent  },
  { path: 'login', component: LoginFrontendComponent  },
  { path: 'registro', component: LoginFrontendComponent  },
  { path: 'panel', component: PanelFrontendComponent  },

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