import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { Class } from '../../interfaces/class';
import { Storage } from '@ionic/storage-angular'; // npm i @ionic/storage-angular
import { Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';
import { User } from '../../interfaces/user';
import { Session } from '../../interfaces/session';
import { SessionClass } from 'src/app/interfaces/sessionclass';

@Component({
  selector: 'app-homestudent',
  templateUrl: './homestudent.page.html',
  styleUrls: ['./homestudent.page.scss'],
})
export class HomestudentPage implements OnInit {
  classSessionOpenned;

  sesionS: Session = {
    type:'session',
    name:'',
    id:''
  };

  constructor(private storage: Storage, private router:Router) { }

  class: Class = {
    id: "5",
    userId: '950143102',
    title: 'Arquitectura de software',
    classCount: 7,
    assistedCount: 5,
    type: 'class',
  };

  clasS: Class = {
    id: this.idGenerator().toString(),
    userId: '72628172',
    title: 'calidad de software',
    classCount: 8,
    assistedCount: 6,
    type: 'class',
  };

  classesList = [];
  usernameS;

  ngOnInit() {
    this.loadSesion();
    this.loadClasses();
    // this.createClass();
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
    await this.storage.set(this.class.id, this.class);
  }

  idGenerator() {
    return Math.floor(Math.random() * 1000000000);
  }

  async loadSesion() {
    this.sesionS = await this.storage.get(this.sesionS.type);
    this.usernameS = this.sesionS.name;
  }
}
