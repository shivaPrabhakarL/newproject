package com.badminton.Servlets;

import com.badminton.Admin;
import com.badminton.AdminDB;
import com.fasterxml.jackson.databind.ObjectMapper;


//import javax.servlet.ServletException;
//import javax.servlet.ServletException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.ParseException;

public class AdminLogIn extends HttpServlet{
    ObjectMapper objectMapper = new ObjectMapper();


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Adminlog admin = objectMapper.readValue(req.getInputStream(), Adminlog.class);
        AdminDB adb = new AdminDB();
        if(adb.verification(admin))
            System.out.println("hi");

    }
}