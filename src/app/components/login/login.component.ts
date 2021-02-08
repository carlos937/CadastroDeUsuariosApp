import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  form = new FormGroup({
    email: new FormControl('jotakj_@outlook.com'),
    senha: new FormControl('kC1rg+b0pjdXs9zO8NvcVO5cp/z9QKMUUXn9RuHLrU12KEobl4e7fXw5vY57nEFq2Hr8UA+SAV+VR+bVIDDkeVEeGbTzB4cYZQh3LiaH9k/OjTT5Jn+0+FFPv2WqL8RBn8opef07w4y1qZwyUFxzOqEy5OTrYPF0Q59GLtjbY10='),
  });
  
  constructor(public nav : NavController, public usuarioService : UsuarioService ) {
     
  }

  ngOnInit() {
    
  }


  login(){

   
    this.usuarioService.login(this.form.value).subscribe(res => {
      if(res.status == 0){
        console.log(res);
        this.nav.navigateForward("home");
      }
      else{
        console.log(res.mensagem);
      }

    })
  }

}
