import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormCasaComponent } from './pages/form-casa/form-casa.component';
import { FormEdificioComponent } from './pages/form-edificio/form-edificio.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form-casa', component: FormCasaComponent },
  { path: 'form-edificio', component: FormEdificioComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'confirmacion', component: ConfirmacionComponent },
  { path: '**', redirectTo: '' }
];
