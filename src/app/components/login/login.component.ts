import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CriptografiaRSA } from 'src/app/security/criptografiaRSA';
import { UsuarioService } from 'src/app/services/usuario-service.service';
import { Suporte } from 'src/app/suporte';
import { Storage } from '@ionic/storage';
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
  
  constructor(
    public nav : NavController,
    public usuarioService : UsuarioService , 
    public cripto : CriptografiaRSA,
    public suporte :Suporte,
    public storage : Storage) {
     
  }

  ngOnInit() {
   
  }


  login(){
    let form =Object.assign({},this.form.value);
    form.senha = this.cripto.criptografar(form.senha);
    this.suporte.abrirLoading();
    this.usuarioService.login(form).subscribe(res => {
      this.suporte.fecharLoading();
      if(res.status == 0){
        this.suporte.abrirToast(res.mensagem,'success');
        delete res.status;
        delete res.mensagem;
        this.storage.set('Login',res);
        this.nav.navigateForward("home");
      }
      else{
        this.suporte.abrirToast( res.mensagem,'danger');
      }
    },() => {
      this.suporte.fecharLoading();
      this.suporte.abrirToast( "Serviço está fora do ar no momento",'danger');
    })
  }

}
