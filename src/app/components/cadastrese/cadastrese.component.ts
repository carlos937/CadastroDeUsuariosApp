import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CriptografiaRSA } from 'src/app/security/criptografiaRSA';
import { UsuarioService } from 'src/app/services/usuario-service.service';
import { Suporte } from 'src/app/suporte';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cadastrese',
  templateUrl: './cadastrese.component.html',
  styleUrls: ['./cadastrese.component.scss'],
})
export class CadastreseComponent implements OnInit {

 public form = new FormGroup({
    nome: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    senha: new FormControl('',Validators.required),
    confirmacaoSenha: new FormControl('',Validators.required)
  });


  constructor(
    public nav: NavController,
    public usuarioService: UsuarioService,
    public cripto: CriptografiaRSA,
    public suporte: Suporte,
    public storage: Storage) {

  }

  ngOnInit() { }

  async cadastrar() {
    let form = Object.assign({}, this.form.value);
    if (form.senha == form.confirmacaoSenha) {
      delete form.confirmacaoSenha;
      form.senha = this.cripto.criptografar(form.senha);
      await this.suporte.abrirLoading();
      this.usuarioService.adicionarUsuario(form).subscribe(res => {
        this.suporte.fecharLoading();
        if (res.status == 0) {
          this.suporte.abrirToast(res.mensagem, 'success');
          delete res.status;
          delete res.mensagem;
          this.storage.set('Login', res);
          this.nav.navigateForward("home");
        }
        else {
          this.suporte.abrirToast(res.mensagem, 'danger');
        }
      }, () => {
        this.suporte.fecharLoading();
        this.suporte.abrirToast("Serviço está fora do ar no momento", 'danger');
      })
    }
    else {
      this.suporte.abrirToast('Suas senhas não correspondem.', 'danger');
    }
  }


}
