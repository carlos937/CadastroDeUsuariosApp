import { Injectable } from "@angular/core";
import { AlertController, LoadingController, ToastController } from "@ionic/angular";

@Injectable()
export class Suporte {
    public loading: HTMLIonLoadingElement;
    constructor(
        public loadingController: LoadingController,
        public toastController: ToastController) { }


    async abrirToast(mensagem: string, css = 'Primary', tempo = 2000) {
        const toast = await this.toastController.create({
            color: css,
            message: mensagem,
            duration: tempo
        });
        toast.present();
    }


    async abrirLoading() {
        this.loading = await this.loadingController.create({
            message: 'Aguarde ...'
        });
        this.loading.present();
    }

    async fecharLoading() {
        this.loading.dismiss();
    }
}