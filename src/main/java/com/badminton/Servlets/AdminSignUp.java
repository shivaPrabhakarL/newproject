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

public class AdminSignUp extends HttpServlet{
    ObjectMapper objectMapper = new ObjectMapper();


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Admin admin = objectMapper.readValue(req.getInputStream(), Admin.class);
        AdminDB adb = new AdminDB();
        adb.createOrUpdateDB(admin);
    }
}