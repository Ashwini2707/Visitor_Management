import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from  '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAv5eDmEfGLVcRm9m3lwI_G-90gGRoOD7M",
    authDomain: "myvisitormanagement.firebaseapp.com",
    databaseURL: "https://myvisitormanagement.firebaseio.com",
    projectId: "myvisitormanagement",
    storageBucket: "",
    messagingSenderId: "790782034378",
    appId: "1:790782034378:web:e61cc12231646c6dc50f33"
  }
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
