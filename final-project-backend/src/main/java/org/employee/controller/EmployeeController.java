package org.employee.controller;

import java.util.HashMap;
import java.util.List;

import org.employee.model.Employee;
import org.employee.repository.EmployeeRepository;
import org.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class EmployeeController {
	
	@Autowired
	EmployeeService empservice;
	
	@Autowired
	EmployeeRepository emprepo;
	
	@PostMapping("/employee")
	public Employee addEmployee(@RequestBody Employee employee) {
		return this.empservice.addEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return this.empservice.getAllEmployees();
	}
	
	@GetMapping("/employee/{id}")
	public Employee getEmployee(@PathVariable long id){
		return this.empservice.getEmployee(id);
	}
	
	@PutMapping("/employee/update/{id}")
	public ResponseEntity<HashMap> updateEmployee(@PathVariable long id,@RequestBody Employee employee){
		HashMap<String, String>  response = new HashMap();
		if(this.emprepo.findById(id).isPresent()) {
			this.empservice.updateEmployee(employee);
			return new ResponseEntity<HashMap>(response,HttpStatus.OK);
		}else {
			return new ResponseEntity<HashMap>(response,HttpStatus.BAD_REQUEST);
		}
	}
	
	@DeleteMapping("/employee/delete/{id}")
	public ResponseEntity<HashMap> deleteEmployee(@PathVariable long id){
		HashMap<String, String>  response = new HashMap();
		if(this.emprepo.findById(id).isPresent()) {
			this.empservice.deleteEmployee(id);
			return new ResponseEntity<HashMap>(response,HttpStatus.OK);
		}else {
			return new ResponseEntity<HashMap>(response,HttpStatus.BAD_REQUEST);
		}
	}
}
