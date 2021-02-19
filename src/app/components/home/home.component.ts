import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
 
  public LoginInformacoes:any;

  constructor(
    public storage:Storage,
    public nav : NavController) {
    storage.get("Login").then(res => {
      this.LoginInformacoes = res;
    })
   }
  
  public appPages = [
    { title: 'Inicio', url: './inicio', icon: 'mail' },
    { title: 'Configurações', url: './configuracoes', icon: 'settings' }
  ];
  ngOnInit() { }

  fazerLogout(){
    this.storage.clear();
    this.nav.navigateBack('');
  }

}
