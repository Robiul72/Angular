//package com.robiul.testSpring.controller;
//
//
//import com.robiul.testSpring.model.StudentModel;
//import com.robiul.testSpring.repository.StudentRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//@Controller
//@RequestMapping("/students")
//
//public class StudentController {
//
//
//    @Autowired
//    private StudentRepo repo;
//
//    @GetMapping("/addform")
//    public  String allStudent(Model m){
//
//        m.addAttribute("student", new StudentModel());
//
////        m.addAttribute("title", "Add Student");
//
//        return "index";
//    }
//
//
//    @PostMapping("/save")
//    public  String saveStudent(){
//
////        repo.save(student);
//
//        return "redirect:/";
//    }
//}
