import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm;
  constructor(public fb:FormBuilder,public as:AuthService,public router:Router) { 
    this.regForm = this.fb.group({
      username:['',],
      password:[''],
      phone:['',[Validators.minLength(10),Validators.maxLength(10)],Validators.pattern[0-9]]
    })
  }
  register(rf){
    this.as.addUser(this.regForm.value).then((res)=>{
      console.log("reg",res);
      
      this.router.navigate([""]);
      
      
    });
  }
  ngOnInit() {
  console.dir(this.regForm)
  }

}
