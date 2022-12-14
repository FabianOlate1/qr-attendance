import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../interfaces/user';
import { Storage } from '@ionic/storage-angular'; // npm i @ionic/storage-angular
import { Router } from '@angular/router';
import { AlertController, IonSelect } from '@ionic/angular';
import { Classes } from '../../interfaces/classes';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = {
    id: this.idGenerator().toString(),
    username: '',
    password: '',
    email: '',
    type: 'user'
  };

  classes: Classes = {
    userId: '',
    classes: []
  }
  

  constructor(private storage: Storage, private router: Router, private alert: AlertController) { }

  ngOnInit() {
  }

  idGenerator() {
    return Math.floor(Math.random() * 1000000000);
  }

  onSubmit() {
    this.guardar();
  }

  async guardar() {
    // we check if the user exists
    const usr = await this.storage.get(this.user.username);

    // if its null (not exist) we create a new one
    if (usr == null) {
      console.log('Usuario registrado');
      this.classes.userId = this.user.id
      await this.storage.set(this.user.username, this.user);
      await this.storage.set(this.classes.userId, this.classes);
      this.router.navigate(['/']);
    }
    else {
      // else we dont do nothing
      console.log('Usuario ya existe');

      const alert = await this.alert.create({
        header: 'Alerta',
        subHeader: '',
        message: 'Este usuario ya existe',
        buttons: ['OK'],
      });
  
      await alert.present();
  
    }

  }
}
