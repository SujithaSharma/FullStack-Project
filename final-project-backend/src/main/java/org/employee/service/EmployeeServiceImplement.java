package org.employee.service;

import java.util.List;
import org.employee.model.Employee;
import org.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImplement implements EmployeeService{
	
	@Autowired
	EmployeeRepository emprepo;
	
	@Override
	public List<Employee> getAllEmployees(){
		return this.emprepo.findAll();
	}
	
	@Override
	public Employee getEmployee(long id) {
		return this.emprepo.findById(id).get();
	}
	
	@Override
	public Employee addEmployee(Employee employee) {
		return this.emprepo.save(employee);
	}
	
	@Override
	public Employee updateEmployee(Employee employee) {
		return this.emprepo.save(employee);
	}
	
	@Override
	public void deleteEmployee(long id){
		this.emprepo.deleteById(id);
	}
}
