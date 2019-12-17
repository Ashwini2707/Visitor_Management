import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('user'));
  
    if(localStorage.getItem('user')){
      this.router.navigate(['admin'])

    }
    
    else{
      this.router.navigate([''])
    }
  



  }
  Lout(){
   console.log(window.localStorage.clear());
  }
}
