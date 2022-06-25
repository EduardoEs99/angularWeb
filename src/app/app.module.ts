import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ListgroupComponent } from './components/listgroup/listgroup.component';
import { AmplificadoresComponent } from './components/productos/amplificadores/amplificadores.component';
import { IntcuerdaComponent } from './components/productos/intcuerda/intcuerda.component';
import { PercusionComponent } from './components/productos/percusion/percusion.component';


//Angular Material

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AshdownComponent } from './components/marcas/ashdown/ashdown.component';
import { FenderComponent } from './components/marcas/fender/fender.component';
import { MarshallComponent } from './components/marcas/marshall/marshall.component';
import { GibsonComponent } from './components/marcas/gibson/gibson.component';
import { EspComponent } from './components/marcas/esp/esp.component';
import { IbanezComponent } from './components/marcas/ibanez/ibanez.component';
import { FooterComponent } from './components/home/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    ListgroupComponent,
    HomeComponent,
    AmplificadoresComponent,
    IntcuerdaComponent,
    PercusionComponent,
    AshdownComponent,
    FenderComponent,
    MarshallComponent,
    GibsonComponent,
    EspComponent,
    IbanezComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // ANGULAR MATERIAL
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
