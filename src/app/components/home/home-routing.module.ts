import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'folder',
        pathMatch: 'full'
      },
      {
        path: 'folder',
        loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
