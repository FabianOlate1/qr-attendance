import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationExtras } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { Class } from '../../interfaces/class';
import { Storage } from '@ionic/storage-angular'; // npm i @ionic/storage-angular
import { Router } from '@angular/router';
import { IonSelect, NavController } from '@ionic/angular';
import { User } from '../../interfaces/user';
import { Session } from '../../interfaces/session';
import { SessionClass } from 'src/app/interfaces/sessionclass';
import { Classes } from 'src/app/interfaces/classes';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  id: any;

  classSessionOpenned;

  sesionP: Session = {
    type:'session',
    name:'',
    id:''
  };

  classesH: Classes = {
    userId: '',
    classes: []
  }

  clase = {
    clase: '',
    classCount: 0,
    identity: '' // puede ser una fecha o un nombre de la clase
  };

  class: Class = {
    title: '',
    classCount: 0,
    assistedClasses: [],
    type: 'class',
  };

  classesList = [];
  usernameP;
  userid: string;

  constructor(private storage: Storage, private router: Router,
    private _route: ActivatedRoute, public nav: NavController) {
      // Acá guardo los datos que envié desde ScanQR
      this._route.queryParams.subscribe(params => {
        this.clase.clase = params.clase;
        this.clase.classCount = params.classCount;
        this.clase.identity = params.identity;
      });
    }

  async ngOnInit() {
    await this.loadSesion();
    this.classesH = await this.storage.get(this.sesionP.id) 
    console.log(this.classesH.userId);
  }

  // !FIJATE AWEONAO: esto se aplica solo despues de que se presione el "aceptar"
  async detalles() {
    let classExists = false;
    let dateExists = false;

    for (let j = 0; j < this.classesH.classes.length; j++) {
      let element = this.classesH.classes[j]
      if (element.title == this.clase.clase) { 
        classExists = true; // esta clase ya existe
        for (let i = 0; i < element.assistedClasses.length; i++) {
          if (element.assistedClasses[i] == this.clase.identity) {
            dateExists = true; // se ha agregado la fecha nueva
            break
          } else {
            dateExists = false; // esta fecha ya existe en tu lista
            break
          }
        }
        break
      } else {
        classExists = false; // esta clase no existe, crearemos clase y fecha
        dateExists = false;
      }
    }
    if (classExists) {
      if (!dateExists) {
        this.classesH.classes.forEach(element => {
          if (element.title == this.clase.clase) {
            element.assistedClasses.push(this.clase.identity);
            console.log('agregamos un identity');
          }
        })
      } else {
        // show error message
        console.log('la clase ya existe tontito');
      }
    } else if (!classExists) {
      console.log('esta clase no existe');
      this.class.classCount = this.clase.classCount;
      this.class.title = this.clase.clase;
      this.class.assistedClasses.push(this.clase.identity);
      this.classesH.classes.push(this.class);
    }
    await this.storage.set(this.sesionP.id, this.classesH);   
    console.log('elemento agregado') 
  }

  idGenerator() {
    return Math.floor(Math.random() * 1000000000);
  }

  async loadSesion() {
    this.sesionP = await this.storage.get('session');
    this.usernameP = this.sesionP.name;
    console.log(this.sesionP.id);
  }

}
