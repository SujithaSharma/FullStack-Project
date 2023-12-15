import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private empservice: EmployeeServiceService) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.empservice.getEmployee(this.id).subscribe(response => {
      this.oldEmployee = response
    })
  }
  employee: Employee = new Employee()
  oldEmployee: Employee = new Employee()
  id!: number;

  updateEmployee(newEmployeeForm: NgForm) {
    if (newEmployeeForm.valid) {
      this.employee.id = newEmployeeForm.controls['id'].value
      this.employee.name = newEmployeeForm.controls['name'].value
      this.employee.email = newEmployeeForm.controls['email'].value
      this.employee.phone = newEmployeeForm.controls['phone'].value
      this.employee.designation = newEmployeeForm.controls['designation'].value
      this.employee.currentproject = newEmployeeForm.controls['currentproject'].value
      this.employee.salary = newEmployeeForm.controls['salary'].value
      console.log(this.employee)
      JSON.stringify(this.employee);
      this.empservice.updateEmployee(this.employee.id, this.employee).subscribe(response => {
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
