package com.badminton.Servlets;


import com.badminton.Player;
import com.badminton.PlayerDB;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class PlayerServlet extends HttpServlet {

    public PlayerServlet()
    {}

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String fname = req.getParameter("firstName");
        String lname = req.getParameter("lastName");
        String uname = req.getParameter("userName");
        String email = req.getParameter("email");
        String gender = req.getParameter("gender");
        String image = req.getParameter("image");
        String phone = req.getParameter("phone");
        String ssize = req.getParameter("shirtSize");
        String eid = req.getParameter("empId");
        String age = req.getParameter("age");
        String pwd = req.getParameter("password");

        Player player = new Player(fname,lname,uname,email,gender,image,phone,ssize,eid,age,pwd);

        PlayerDB database = new PlayerDB();
        database.addPlayer(player);

    }
}