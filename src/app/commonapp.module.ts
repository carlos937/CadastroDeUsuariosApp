import { UsuarioService } from './services/usuario-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriptografiaRSA } from './security/criptografiaRSA';
import { Suporte } from './suporte';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    IonicStorageModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    IonicModule, 
    IonicStorageModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UsuarioService,
    CriptografiaRSA,
    Suporte
  ],
})
export class CommonAppModule {}
