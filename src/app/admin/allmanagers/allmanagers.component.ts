import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-allmanagers',
  templateUrl: './allmanagers.component.html',
  styleUrls: ['./allmanagers.component.css']
})
export class AllmanagersComponent implements OnInit {

  constructor(public ads:AdminService) { }
  allManagers;
  ngOnInit() {
    this.ads.getUsers().subscribe((res:any[])=>{
      console.log(res)
      this.allManagers=res;
    })
 
  }

}
