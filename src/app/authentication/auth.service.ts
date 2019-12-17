import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public db: AngularFirestore) {
    this.db.collection('testing').valueChanges().subscribe((res)=>{
      console.log("res",res)
    })
  }
  addUser(user){
    user.usertype="pending";
    return this.db.collection('users').add(user);
  }
  login(user){
    return this.db
    .collection('users',ref=>ref.where('phone','==',user.phone))
    .valueChanges();   
  }
}
