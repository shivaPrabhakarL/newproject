package com.badminton;

import java.sql.*;

public class PlayerDB {

    Connection con;
    Statement stmt;

    public PlayerDB()
    {
        establishConnection();
    }

    public void establishConnection()
    {
        // System.out.println("Establishing-Connection");
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/playerdb", "player", "player");
               System.out.println("ConnectionObj"+con);
            stmt = con.createStatement();
                System.out.println("StatementObj"+stmt);
        }
        catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }


    public int addPlayer(Player player)
    {
        try {
            System.out.println("in add Player");
            String query = "insert into plTemp (firstName,lastName,userName,email,gender,image,phone,shirtSize,empId,age,password) values ('"
                    +player.getFirstName()+"','"+player.getLastName() +"','"+player.getUserName() +"','" +player.getEmail() + "','"
                    +player.getGender() +"','" +player.getImage() + "','" +player.getPhone() +"','" +player.getShirtSize() +"',"
                    +Integer.parseInt(player.getEmpId()) +"," +Integer.parseInt(player.getAge()) +",'"
                    +player.getPassword() +"');";
            System.out.println(query);
            System.out.println(stmt.executeUpdate(query));
            String newQuery = "select * from plTemp";
            System.out.println(stmt.executeQuery(newQuery));

        }
        catch (Exception e) {


        }

        return 1;
    }
}
