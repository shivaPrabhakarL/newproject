package com.badminton;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class PlayerDatabase {

    Connection con;
    Statement stmt;

    public PlayerDatabase()
    {
        establishConnection();
    }

    public void establishConnection()
    {
        // System.out.println("Establishing-Connection");
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/taskdb", "taskuser", "taskuser");
            //   System.out.println("ConnectionObj"+con);
            stmt = con.createStatement();
            //   System.out.println("StatementObj"+stmt);
        }
        catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }


    public int addPlayer(Player player)
    {


        return 1;
    }
}
