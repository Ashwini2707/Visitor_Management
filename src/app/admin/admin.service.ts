import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  pendingUsers;
  constructor(public db: AngularFirestore) {
   
  }
  getUsers(){
    return  this.db.collection('users').valueChanges({idField:'id'});
  }
  updateUserType(u){
    return this.db.doc(`users/${u.id}`).update(u);
  }
  
}
