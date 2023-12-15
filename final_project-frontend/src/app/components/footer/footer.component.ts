import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) { }
  selectedTab = this.router.url
  ngOnInit(): void {
    let aboutbtn = document.getElementById("about")!
    aboutbtn.addEventListener('click', () => {
      aboutbtn.classList.add('active')
      contactbtn.classList.remove('active')
      tandcbtn.classList.remove('active')
    })
    let contactbtn = document.getElementById("contact")!
    contactbtn.addEventListener('click', () => {
      contactbtn.classList.add('active')
      aboutbtn.classList.remove('active')
      tandcbtn.classList.remove('active')
    })
    let tandcbtn = document.getElementById("tandc")!
    tandcbtn.addEventListener('click', () => {
      tandcbtn.classList.add('active')
      aboutbtn.classList.remove('active')
      contactbtn.classList.remove('active')
    })
  }
}
