import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { PlataformasComponent } from '../frontend/plataformas/plataformas.component';
import { NewPlataformaComponent } from '../frontend/new-plataforma/new-plataforma.component';
import { BackendStandardComponent } from '../backend/backend-standard/backend-standard.component';
import { ValidateComponent } from '../frontend/validate/validate.component';


const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: PlataformasComponent  },
  { path: 'creando-tienda', component: NewPlataformaComponent},
  { path: 'cliente-backend',component: BackendStandardComponent},
  { path: 'login', component: ValidateComponent}
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