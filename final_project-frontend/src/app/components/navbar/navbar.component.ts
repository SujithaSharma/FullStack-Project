import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private userservice: UserService) { }
  login: Login = new Login()
  showLoginPopup = false;
  showLoginBtn = true;
  showProfileBtn = false;
  isLogged = false;
  showLogoutPopup = false;
  profileName: any;
  profileLetter: any;

  ngOnInit(): void {
    if (localStorage.getItem("login")) {
      this.isLogged == true
      this.showLoginBtn = false
      this.showProfileBtn = true;
    }
    this.userservice.getUserName(localStorage.getItem("email")).subscribe(response => {
      if (response) {
        this.profileName = response
        this.profileName = this.profileName.name
        this.profileLetter = this.profileName.charAt(0).toUpperCase()
        console.log(this.profileName)
      }
    })
  }

  logout() {
    localStorage.removeItem("login")
    localStorage.removeItem("email")
    localStorage.removeItem("name")
    this.showLogoutPopup = false
    this.isLogged = false
    this.toggleButtons()
    window.setTimeout(function () {
      window.location.reload();
    });
    this.router.navigate(["/"]);
  }
  toggleButtons() {
    if (this.isLogged == true) {
      this.showLoginBtn = false
      this.showProfileBtn = true;
    } else {
      this.showLoginBtn = true
      this.showProfileBtn = false;
    }
  }
  loggedIn(loginForm: NgForm, login: Login) {
    console.log(loginForm.value)

    if (loginForm.valid) {
      JSON.stringify(login)
      this.userservice.userLogin(login).subscribe(response => {
        alert("Logged In !")
        this.isLogged = true
        this.toggleButtons();
        localStorage.setItem("login", 'true')
        localStorage.setItem("email", login.email)
        this.router.navigate(["dashboard"]);
        this.userservice.getUserName(localStorage.getItem("email")).subscribe(response => {
          if (response) {
            this.profileName = response
            this.profileName = this.profileName.name
            localStorage.setItem("name", this.profileName)
            this.profileLetter = this.profileName.charAt(0).toUpperCase()
          }
        })
      }, (error) => { alert(error.error.message) })
    } else {
      alert("Enter correct email and passwords !")
    }
  }
}
