import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/service/register.service';
import { User } from '../user';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMsg: string;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    this.registerService.loginUser(this.user)
    .subscribe(
      data => {
        console.log('Response rcvd');
        this.router.navigate(['/loginsuccess']);
    } ,
      error => {
        console.log('Error Occured')
        this.errorMsg = 'Bad credential, enter valid id and password';
    }
    )
  }

  // registration(){
  //  this.router.navigate(['/register']);
  // }

}
