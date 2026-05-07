package com.example.kiksi1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.kiksi1.dao.EmployeeDao;
import com.example.kiksi1.entity.Employee;

import java.util.ArrayList;

@Service

public class EmployeeService {
    @Autowired
    private EmployeeDao employeeDao;

    public Employee saveEmployee(Employee employee) {
        return employeeDao.save(employee);
    }

    public List<Employee> getEmployees() {
        List<Employee> employees = new ArrayList<Employee>();
        employeeDao.findAll().forEach(employees::add);
        return employees;
    }

    public Employee getEmployees(Integer employeeId) {
        return employeeDao.findById(employeeId).orElseThrow();
    }

    public void deleteEmployee(Integer employeeId) {
        employeeDao.deleteById(employeeId);

    }

    public Employee updateEmployee(Employee employee) {
        employeeDao.findById(employee.getEmployeeId()).orElseThrow();
        return employeeDao.save(employee);

    }
}
