package com.badminton;

public class PlayerFunctions {

    PlayerDatabase database = new PlayerDatabase();

    public int registerPlayer(String firstName, String lastName, String email, String gender, String image, String phone,
                              String shirtSize, int empId, int age, String password)
    {
        Player newPlayer = new Player(firstName, lastName, email, gender, image, phone, shirtSize, empId, age, password);
        database.addPlayer(newPlayer);
        return 1;
    }

    public int loginPlayer()
    {


        return 1;
    }


}
