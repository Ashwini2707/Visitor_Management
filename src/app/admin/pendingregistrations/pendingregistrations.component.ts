import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-pendingregistrations',
  templateUrl: './pendingregistrations.component.html',
  styleUrls: ['./pendingregistrations.component.css']
})
export class PendingregistrationsComponent implements OnInit {

  constructor(public ads:AdminService) { }
  pendingUsers;
  approve(user,s){
    user.usertype=s;
    this.ads.updateUserType(user).then((res)=>{
      
      console.log(res)
    })
  }
  ngOnInit() {
    this.ads.getUsers().subscribe((res:any[])=>{
      console.log(res)
      this.pendingUsers=res.filter((a)=>{
        return a.usertype.localeCompare('pending')==0
      })
    })
  }

}
