import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  pendingVisits;
  constructor(public db: AngularFirestore) {
   
  }
  getVisits(){
    return  this.db.collection('visits').valueChanges({idField:'id'});
  }
  updateVisit(v){
    console.log(v);
    return this.db.doc(`visits/${v.id}`).update(v);
  }
}
