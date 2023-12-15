import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  constructor(private router: Router, private empservice: EmployeeServiceService) { }

  employee: Employee = new Employee()

  addEmployee(newEmployeeForm: NgForm) {
    console.log(newEmployeeForm.valid)
    if (newEmployeeForm.valid) {
      JSON.stringify(this.employee);
      this.empservice.addEmployee(this.employee).subscribe(response => {
        this.router.navigate(["employee/list"])
      })
    } else {
      alert("Form has invalid elements !!");
    }
  }
  redirectToList() {
    this.router.navigate(["employee/list"])
  }
}
