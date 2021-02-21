import { UsuarioService } from './services/usuario-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CriptografiaRSA } from './security/criptografiaRSA';
import { Suporte } from './suporte';
import { CadastreseComponent } from './components/cadastrese/cadastrese.component';
import { CommonAppModule } from './commonapp.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastreseComponent,
  ],
  entryComponents: [],
  imports: [
    IonicModule.forRoot(), 
    AppRoutingModule,
    BrowserModule, 
    CommonAppModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UsuarioService,
    CriptografiaRSA,
    Suporte
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
