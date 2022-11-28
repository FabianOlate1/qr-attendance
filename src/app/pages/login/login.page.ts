
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

import { AuthGuard } from '../../../guards/auth.guard';
import { User } from '../../interfaces/user';
import { Session } from '../../interfaces/session';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registrado: User=null;

  user: User={
    id: '',
    username:'',
    password:'',
    email:'',
    type:''
  };

  opennedSesion: Session=null;

  sesion: Session={
    type:'session',
    name:'',
    id:''
  };

  constructor(private storage: Storage, private router: Router  ) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.user);
    this.logear();
  }

  async deleteElement(element) {
    await this.storage.remove(element);
  }

  async logear()
  {
    this.registrado = await this.storage.get(this.user.username);
    if (this.registrado!=null)
    {
      this.sesion.name = this.user.username;
      this.sesion.id = this.registrado.id;
      this.opennedSesion = await this.storage.get(this.sesion.type);
      if (this.opennedSesion == null) {
        // creamos una sesion
        await this.storage.set(this.sesion.type, this.sesion);
      } else {
        this.storage.forEach(element => {
          if (element.type === 'session') {
            this.deleteElement(element);
          }
        });
        await this.storage.set(this.sesion.type, this.sesion);
      }
      if(this.user.username === this.registrado.username && this.user.password === this.registrado.password)
      {
        // abrir pagina estudiante
        AuthGuard.itsCorrect = true;
        this.router.navigate(['/homestudent']);
      }
      else{
        console.log('Usuario no existe!!!');
      }
    }
    else{
      console.log('Pa la casa por agilao');
    }
  }
}
