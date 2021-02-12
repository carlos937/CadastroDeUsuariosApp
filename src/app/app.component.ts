import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor( 
    public storage : Storage,
    public nav : NavController){

  }
  ngOnInit(): void {
   this.storage.get('Login').then(res => {
      if(!res){
          this.nav.navigateForward('');
      }
   })
  }

}
