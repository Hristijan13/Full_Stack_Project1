package com.example.kiksi1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.kiksi1.dao.EmployeeDao;
import com.example.kiksi1.entity.Employee;

@Service

public class EmployeeService {
    @Autowired
    private EmployeeDao employeeDao;

    public Employee saveEmployee(Employee employee) {
        return employeeDao.save(employee);
    }
}
