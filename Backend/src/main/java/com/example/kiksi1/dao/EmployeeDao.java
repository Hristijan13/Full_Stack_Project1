package com.example.kiksi1.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.kiksi1.entity.Employee;

@Repository
public interface EmployeeDao extends CrudRepository<Employee, Integer> {

}