import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  visitorForm:FormGroup;
  constructor(public fb:FormBuilder, public us:UserService,public router:Router) { 
    if(localStorage.getItem('user')){
      this.visitorForm=this.fb.group({
        visitorName:[],
        visitorid:[],
        visitorMobile:[],
        visitorVehicle:[],
        flatNumber:[],
        visitordate:[],
        status:false,
        userid:[JSON.parse(localStorage.getItem('user'))[0].id]
      })
    }
    else{
      this.router.navigate([""])
    }
 
  }
  visitBooking(){
    this.us.bookVisit(this.visitorForm.value).then((res)=>{
      console.log(res)
    })
  }
  ngOnInit() {

  }

  lout(){
    window.localStorage.clear();
    this.router.navigate([""]);
  }

}
