import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db: AngularFirestore) { }
  bookVisit(visit){
    visit.status="pending";
    return this.db.collection('visits').add(visit);
  }
  getVisitorsByUser(uid){
    return this.db.collection("visits",ref=>ref.where('userid','==',uid))
                  .valueChanges({idField: 'id'})
  }
  deleteVisit(x){
    console.log(x)
   // console.log()
    this.db.doc(`visits/${x.id}`).delete().then((res)=>{console.log(res)});
    //this.db.collection(`visits`).valueChanges().subscribe((res)=>{console.log(res)});
  }
  deleteUser(x){
    console.log(x)
   // console.log()
    return this.db.doc(`users/${x.id}`).delete();
    //this.db.collection(`visits`).valueChanges().subscribe((res)=>{console.log(res)});
  }
}
