package org.employee.service;

import java.util.List;

import org.employee.model.Employee;

public interface EmployeeService {
	public Employee getEmployee(long id);
	public List<Employee> getAllEmployees();
	public Employee addEmployee(Employee employee);
	public Employee updateEmployee(Employee employee);
	public void deleteEmployee(long id);
}
