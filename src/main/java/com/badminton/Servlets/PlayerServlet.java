package com.badminton.Servlets;


import com.badminton.NewPlayer;
import com.badminton.PlayerFunctions;
import com.fasterxml.jackson.databind.ObjectMapper;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class PlayerServlet extends HttpServlet {

    public PlayerServlet()
    {}



    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        PlayerFunctions functions = new PlayerFunctions();

        ObjectMapper objectMapper = new ObjectMapper();
        NewPlayer newPlayer = objectMapper.readValue(req.getInputStream(),NewPlayer.class);

        /* String firstName = req.getParameter("fname");
         String lastName = req.getParameter("lname");
         String email = req.getParameter("email");
         String gender = req.getParameter("gender");
         String image = req.getParameter("image");
         String phone = req.getParameter("phone");
         String shirtSize = req.getParameter("size");
         //int empId = Integer.parseInt(req.getParameter("empid"));
         //int age = Integer.parseInt(req.getParameter("age"));
         String password = req.getParameter("password");

         functions.registerPlayer(firstName,lastName,email,gender,image,phone,shirtSize,empId,age,password);

         */
    }
}