import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/signup';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userservice: UserService, private router: Router) { }
  signup: Signup = new Signup()
  confirmPassword: any;
  userRegistered(registerForm: NgForm, signup: Signup) {
    console.log(registerForm)
    if ((signup.password != signup.confirmPassword)) {
      document.getElementById("showcerror")!.style.display = "block";
    } else if (registerForm.valid) {
      document.getElementById("showcerror")!.style.display = "none";
      JSON.stringify(signup);
      this.userservice.userRegister(signup).subscribe(response => {
        alert("Registered successfully !")
        this.userservice.sendEmail(this.signup.email).subscribe(response => { })
        this.router.navigate(['/'])
      })
    } else {
      document.getElementById("showcerror")!.style.display = "none";
      alert("Please enter all mandatory fields !!");
    }
  }
}
