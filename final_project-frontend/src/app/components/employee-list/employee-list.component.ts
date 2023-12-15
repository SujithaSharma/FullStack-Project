import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  btnText = "Add Employee";
  allEmployees: any;

  constructor(private router: Router, private empservice: EmployeeServiceService) { }
  ngOnInit(): void {
    if (this.router.url == "/dashboard") {
      this.btnText = "View List"
    }

    this.empservice.getAllEmployees().subscribe(response => {
      if (response) {
        this.allEmployees = response
      }
    })
  }

  addEmployee() {
    if (this.router.url == "/dashboard") {
      this.router.navigate(["employee/list"])
    } else {
      this.router.navigate(["employee/new"])
    }
  }

  deleteEmployee(id: any) {
    this.empservice.deleteEmployee(id).subscribe(response => {
      window.setTimeout(function () {
        window.location.reload();
      }, 2);
    })
  }

  redirectToUpdate(id: any) {
    this.router.navigate(["employee/update/" + id])
  }
}
