import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-passrecovery',
  templateUrl: './passrecovery.page.html',
  styleUrls: ['./passrecovery.page.scss'],
})
export class PassrecoveryPage implements OnInit {

  usuario: User={
    username: '',
    password: '',
    email: '',
    id: '',
    type: ''
  };
formulariorecovery: any;

  // eslint-disable-next-line max-len
  constructor(private storage: Storage, private router: Router, private loadingCtrl: LoadingController, private alertController: AlertController) { }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Se ha modificado la contraseña exitosamente',
      duration: 1000,
    });
    loading.present();
  }

  ngOnInit() {
  }

  async obtener()
    {
      const usr= await this.storage.get(this.usuario.username);
      if(this.usuario.username=== usr.username && this.usuario.email===usr.email)
      {
        await this.storage.set(this.usuario.username, this.usuario);
        this.showLoading();
        this.router.navigate(['/login']);
      }
      else{
        this.presentAlert();
        console.log('Denegado');
      }
    }
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Acceso Denegado',
        subHeader: '',
        message: 'Usuario o Correo incorrecto',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Alert canceled');
            },
          },
          {
            text: 'Aceptar',
            role: 'confirm',
            handler: () => {
              console.log('Alert confirmed');
            },
          },
        ],
        mode:'ios',
        backdropDismiss:false,
        cssClass:'miclase',
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log(`Dismissed with role: ${role}`);
    }

  onSubmit()
  { this.obtener();
  }


}
