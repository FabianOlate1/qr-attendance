
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular'; // without this, the local storage dont works
import {Drivers, Storage} from '@ionic/storage';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@NgModule({
  declarations:[
    AppComponent,
  ],
  imports: [BrowserModule,
    StoreDevtoolsModule.instrument({maxAge: 25}),
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: 'basedatos',
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Storage],
  bootstrap: [AppComponent],
})
export class AppModule {}
