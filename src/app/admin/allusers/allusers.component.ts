import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(public ads:AdminService,public us:UserService) { }
  allUsers;
  ngOnInit() {
    this.ads.getUsers().subscribe((res:any[])=>{
      console.log(res)
      this.allUsers=res;
    })  
  }
  delUser(user){
    this.us.deleteUser(user).then((res)=>{console.log(res)});
  }
}
