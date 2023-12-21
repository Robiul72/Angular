package com.robiul.testSpring.repository;


import com.robiul.testSpring.model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface StudentRepo extends JpaRepository <StudentModel, Integer>{
}
