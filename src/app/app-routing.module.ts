import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CadastreseComponent } from './components/cadastrese/cadastrese.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home-routing.module').then(m => m.HomePageRoutingModule)
  },
  {
    path: 'cadastrese',
    component : CadastreseComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
