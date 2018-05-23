import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  model = { 
    username:"admin", 
    password:"admin" 
  }; 
  submitted = false;
  
  onSubmit() { 
    this.submitted = true;
    if(this.model.username===this.model.password) 
      this.router.navigate(['/menu']);
  }
 
  reset() {
    this.model = {username:"", password:"" };
  }
}
