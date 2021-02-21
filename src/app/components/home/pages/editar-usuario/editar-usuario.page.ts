import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CriptografiaRSA } from 'src/app/security/criptografiaRSA';
import { UsuarioService } from 'src/app/services/usuario-service.service';
import { Suporte } from 'src/app/suporte';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {

  public form: FormGroup;
  public informacoesLogin: any;
  constructor(
    public nav: NavController,
    public usuarioService: UsuarioService,
    public cripto: CriptografiaRSA,
    public alertController: AlertController,
    public suporte: Suporte,
    public storage: Storage) { }

  ngOnInit() {

    this.storage.get('Login').then(res => {
      this.informacoesLogin = res;
      this.form = new FormGroup({
        id: new FormControl(res.id),
        nome: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        token: new FormControl(res.token)
      })
    })


  }
  async editar() {
    let form = Object.assign({}, this.form.value);
    await this.suporte.abrirLoading();
    this.usuarioService.editarUsuario(form).subscribe(res => {
      this.suporte.fecharLoading();
      if (res.status == 0) {
        this.suporte.abrirToast(res.mensagem, 'success');
        delete res.status;
        delete res.mensagem;
        this.storage.set('Login', res);
      }
      else {
        this.suporte.abrirToast(res.mensagem, 'danger');
      }
    }, () => {
      this.suporte.fecharLoading();
      this.suporte.abrirToast("Serviço está fora do ar no momento", 'danger');
    })

  }

  async AlterarSenha() {
    const alert = await this.alertController.create({
      header: 'Alterar Senha',
      backdropDismiss: false,
      inputs: [
        {
          name: 'senha',
          type: 'text',
          placeholder: 'Senha'
        },
        {
          name: 'confirmarSenha',
          type: 'text',
          placeholder: 'Confirmar Senha'
        },

      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //  alert.dismiss();
          }
        }, {
          text: 'Ok',
          handler: (res) => {
            if (res.senha == res.confirmarSenha) {
              let form = {
                id: this.informacoesLogin.id,
                senha: this.cripto.criptografar(res.senha),
                token: this.informacoesLogin.token
              };
              this.usuarioService.alterarSenha(form).subscribe(res => {
                this.suporte.fecharLoading();
                if (res.status == 0) {
                  this.suporte.abrirToast(res.mensagem, 'success');
                  delete res.status;
                  delete res.mensagem;
                  this.storage.set('Login', res);
                }
                else {
                  this.suporte.abrirToast(res.mensagem, 'danger');
                }
              }, () => {
                this.suporte.fecharLoading();
                this.suporte.abrirToast("Serviço está fora do ar no momento", 'danger');
              })

            } else {
              this.suporte.abrirToast('Suas senhas não correspondem.', 'danger');
              return false;
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
