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

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  id: any;

  classSessionOpenned;

  sesionS: Session = {
    type:'session',
    name:'',
    id:''
  };

/*   clasSOp: Class = {
    id: '257175225',
    userId: '',
    title: '',
    classCount: 0,
    assistedCount: 0,
    type: 'class',
  };
 */

  // Acá recibo los datos desde el ScanQR, con el nombre de la clase y la sección. Hay que añadirla
  // a la lista de clases del usuario.
  clase = {
    id:'',
    clase: '',
    seccion: '',
    classCount: 0,
  };

  class: Class = {
    id: '',
    userId: '',
    title: '',
    classCount: 0,
    assistedCount: 0,
    type: 'class',
  };

  classesList = [];
  usernameS;
  userid: string;

  constructor(private storage: Storage, private router: Router,
    private _route: ActivatedRoute, public nav: NavController) {
      // Acá guardo los datos que envié desde ScanQR
      this._route.queryParams.subscribe(params => {
        this.clase.clase = params.clase;
        this.clase.seccion = params.seccion;
        this.clase.id = params.id;
        this.clase.classCount = params.classCount;
      });
    }

    // !FIJATE AWEONAO: esto se aplica solo despues de que se presione el "aceptar"
  async detalles() {
    this.clase = await this.storage.get(this.clase.id);
    this.class.id = this.clase.id;
    this.class.title = this.clase.clase;
    this.class.classCount = Number(this.clase.classCount);

    if (!this.clase) {
      this.class.assistedCount += 1;
      await this.storage.set(this.clase.id, this.class);
    } else {
      this.class.assistedCount += 1;
      await this.storage.set(this.clase.id, this.class);
    }
  }

  ngOnInit() {
    this.detalles(); // sacar si no funciona
    this.loadSesion();
    //this.loadClasses();
    //this.createClass();
  }

  loadClasses() {
    this.storage.forEach(element => {
      if (element.type == 'class' && element.userId == this.sesionS.id) {
        if (this.classesList.length <= 2) {
          this.classesList.push(element);
        }
      }
    });
  }

  async createClass() {
    await this.storage.set(this.clase.id, this.clase);
  }

  idGenerator() {
    return Math.floor(Math.random() * 1000000000);
  }

  async loadSesion() {
    this.sesionS = await this.storage.get(this.sesionS.type);
    this.usernameS = this.sesionS.name;
  }

}
