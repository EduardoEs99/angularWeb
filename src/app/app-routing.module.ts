import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { AshdownComponent } from './components/marcas/ashdown/ashdown.component';
import { EspComponent } from './components/marcas/esp/esp.component';
import { FenderComponent } from './components/marcas/fender/fender.component';
import { GibsonComponent } from './components/marcas/gibson/gibson.component';
import { IbanezComponent } from './components/marcas/ibanez/ibanez.component';
import { MarshallComponent } from './components/marcas/marshall/marshall.component';
import { AmplificadoresComponent } from './components/productos/amplificadores/amplificadores.component';
import { IntcuerdaComponent } from './components/productos/intcuerda/intcuerda.component';
import { PercusionComponent } from './components/productos/percusion/percusion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'amplificadores',
    component: AmplificadoresComponent
  },
  {
    path: 'intcuerda',
    component: IntcuerdaComponent
  },
  {
    path: 'percusion',
    component: PercusionComponent
  },
  {
    path: 'asdown',
    component: AshdownComponent
  },
  {
    path: 'esp',
    component: EspComponent
  },
  {
    path: 'fender',
    component: FenderComponent
  },
  {
    path: 'gibson',
    component: GibsonComponent
  },
  {
    path: 'ibanez',
    component: IbanezComponent
  },
  {
    path: 'marshall',
    component: MarshallComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
