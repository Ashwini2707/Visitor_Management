import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-myvisitors',
  templateUrl: './myvisitors.component.html',
  styleUrls: ['./myvisitors.component.css']
})
export class MyvisitorsComponent implements OnInit {

  constructor(public us:UserService) { }
  myvisitors;
  flag=false;
  myvisit:[]=this.myvisitors;
  del(x){
    console.log(x);
    this.us.deleteVisit(x)
  }
  done(y){
    console.log(y.visitorName);
    console.dir(y);
    y.flag=true;
  }
 

  ngOnInit() {
    this.us .getVisitorsByUser(JSON.parse(localStorage.getItem('user'))[0].id)
            .subscribe((res)=>{
              console.log(res)
              this.myvisitors=res;
            })
            console.log(this.myvisitors)
            console.log(this.myvisit)
  }

}
