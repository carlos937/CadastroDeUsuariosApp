import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public nav : NavController ) { }

  ngOnInit() {
    
  }


  login(){
    this.nav.navigateForward("home");
  }

}
