import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mangerdashboard',
  templateUrl: './mangerdashboard.component.html',
  styleUrls: ['./mangerdashboard.component.css']
})
export class MangerdashboardComponent implements OnInit {

  constructor(public ms:ManagerService,public router:Router) { }
  visits;
  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('user'));
  
    if(localStorage.getItem('user')){
      this.router.navigate(['manager'])

    }
    
    else{
      this.router.navigate([''])
    }
    
    

    this.ms.getVisits().subscribe((res)=>{
      this.visits=res;
      console.log("Visists",res)
    })
  }
  visited(v){
    v.status = 'done'
    this.ms.updateVisit(v).then((res)=>{
      console.log(res);
    })
  }
  lout(){
    window.localStorage.clear();
  
    this.router.navigate([""]);
  }
}
