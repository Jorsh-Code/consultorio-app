import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public errorStatus: boolean = false;
  public errorMsg: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.checkStatus();
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void{
    const LOGIN : Login = {
      usuario: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value
    }
    
    this.authService.login(LOGIN).subscribe(data => {
      if(data.status === 'ok'){
        sessionStorage.setItem('token',data.result.token);
        this.authService.token = data.result.token;
        this.router.navigate(['dashboard']);
      }else{
        this.errorStatus = true;
        this.errorMsg = data.result.error_msg;
      }
    });
  }

  checkStatus(): void{
    if(this.authService.getStatus()){
      this.router.navigate(['dashboard']);
    }
  }

}
