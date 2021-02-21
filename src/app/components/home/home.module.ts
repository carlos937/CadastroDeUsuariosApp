import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { EditarUsuarioPage } from './pages/editar-usuario/editar-usuario.page';
import { InicioPage } from './pages/inicio/inicio.page';
import { CommonAppModule } from 'src/app/commonapp.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    EditarUsuarioPage,
    InicioPage,
    CommonAppModule
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}
