import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public as:AuthService,public fb:FormBuilder,public router:Router){ 
    this.loginForm = this.fb.group({
      phone:['',Validators.required],
      password:['',Validators.required]
    })
  }
  loginForm;
  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user){
      if(user.usertype=='admin'){
        this.router.navigate(['admin']);
      }
      if(user.usertype=='manager'){
        this.router.navigate(['manager']);
      }
      if(user.usertype=='user'){
        this.router.navigate(['user']);          
      }      
    }
  }
  
  login(){
    
    
    this.as.login(this.loginForm.value).subscribe((res:any[])=>{      
      if(res){
       
        console.log(res.length);
        console.log(res);
        window.localStorage.setItem('user',JSON.stringify(res));
        
        
        if(res.length == 0){

          alert("Your Account is not Registered");
        

        }

        if(res[0].usertype=='pending'){
          alert("Your account activation is still Pending!! please wait")
        }

        if(res[0].usertype=='admin'){

          if(this.loginForm.value.password==res[0].password){
            this.router.navigate(['admin']);
          }
          else{
            alert("password mismatch");
          }

        }

        if(res[0].usertype=='manager') 
        {
          if(this.loginForm.value.password==res[0].password){
            this.router.navigate(['manager']);
          }
          else{
            alert("password mismatch");
          }
        
        }

        if(res[0].usertype=='user')
        {
          if(this.loginForm.value.password==res[0].password){
            this.router.navigate(['user']);     
          }
          else{
            alert("password mismatch");
          }
        
        }


        
      }
     
        
    })
  }
}
