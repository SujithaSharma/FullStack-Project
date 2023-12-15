import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final_project';
  selectedTab = this.router.url
  constructor(private router: Router) { }
  isLogged = false;
  ngOnInit(): void {
    if (localStorage.getItem("login")) {
      this.isLogged = true;
    }
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.selectedTab = event.url
      }
    });
  }
}
