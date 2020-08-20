import { error } from 'protractor';
import { User } from 'src/app/user';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from './service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  msg = '';

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(){
    this.registerService.registerUser(this.user)
    .subscribe(
      data => {
        console.log(this.user);
        this.router.navigate(['']);
    } ,
      error => {
        console.log('Error Occured');
        this.msg = error.error;
        console.log(error.status);
        console.log(this.msg);
    }
    )
  }

}