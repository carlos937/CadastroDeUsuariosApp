import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CriptografiaRSA } from 'src/app/security/criptografiaRSA';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  

  public keyPub = "";
  public keyPriv = "";

  form = new FormGroup({
    email: new FormControl('jotakj_@outlook.com'),
    senha: new FormControl('12345'),
  });
  
  constructor(public nav : NavController, public usuarioService : UsuarioService , public cripto : CriptografiaRSA) {
     
  }

  ngOnInit() {
   
  }


  login(){

    let form =Object.assign({},this.form.value);
    form.senha = this.cripto.criptografar(form.senha);
    this.usuarioService.login(form).subscribe(res => {
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
