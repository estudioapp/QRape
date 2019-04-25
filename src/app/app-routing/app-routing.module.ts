import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { InicioFrontendComponent } from '../components/frontend/inicio-frontend/inicio-frontend.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: InicioFrontendComponent  },
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