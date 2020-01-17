package com.badminton.Servlets;

import com.badminton.Admin;
import com.badminton.AdminDB;
import com.fasterxml.jackson.databind.ObjectMapper;


//import javax.servlet.ServletException;
//import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.ParseException;
@WebServlet(name = "AdminLogIn",urlPatterns = "/AdminLogIn")
public class AdminLogIn extends HttpServlet{
    ObjectMapper objectMapper = new ObjectMapper();


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        Adminlog admin = new Adminlog();
        admin.setEmail(req.getParameter("email"));
        admin.setPassword(req.getParameter("password"));
        AdminDB adb = new AdminDB();
        PrintWriter p = resp.getWriter();
        if(adb.verification(admin)) {
           // doGet(req,resp);
            resp.getWriter().write("success");
        }

    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        RequestDispatcher requestDispatcher;
//        requestDispatcher = req.getRequestDispatcher("/adminReg.html");
//        requestDispatcher.forward(req, resp);
        Adminlog admin = new Adminlog();
        admin.setEmail(req.getParameter("email"));
        admin.setPassword(req.getParameter("password"));
        AdminDB adb = new AdminDB();
        PrintWriter p = resp.getWriter();
        if(adb.verification(admin)) {
            // doGet(req,resp);
            resp.getWriter().write("success");
        }
        else{
            resp.getWriter().write("retry");
        }
    }
}