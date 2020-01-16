
     function newLoad(){
        const body = document.body;
        body.removeChild(document.getElementById('navbar'));
              try{
                       body.removeChild(document.getElementById('playerForm'));
              }catch(error){
                 try{
                     body.removeChild(document.getElementById('adminForm'));
                 }catch(error){}
              }
              loadHome();
     }

function loadHome(){

      var navbar=document.createElement('nav');
      navbar.setAttribute('class','homebar');
      navbar.setAttribute('id','navbar');
      document.body.appendChild(navbar);


     var logo=document.createElement('img');
      logo.setAttribute('class','logo');
      logo.src="images/logo.png";
      navbar.appendChild(logo);

      var img=document.createElement('img');
      img.setAttribute('class','logo');
      img.src="images/pbl.png";
      navbar.appendChild(img);


      var unorderedlist=document.createElement("ul");
      unorderedlist.setAttribute('class','unlist');
      navbar.appendChild(unorderedlist);


      var list0=document.createElement("li");
      list0.setAttribute('class','listelements');
      unorderedlist.appendChild(list0);

      var menu10=document.createElement("a");
      menu10.setAttribute('class','stats');
      menu10.href="index.html";
      //menu10.setAttribute('onclick','newLoad()')
      menu10.textContent='Home';
      list0.appendChild(menu10);



      var list=document.createElement("li");
      list.setAttribute('class','listelements');
      unorderedlist.appendChild(list);


      var menu1=document.createElement("a");
      menu1.setAttribute('class','stats');
      menu1.href="#";
      menu1.textContent='TeamStats';
      list.appendChild(menu1);

      var list1=document.createElement("li");
      list1.setAttribute('class','listelements');
      unorderedlist.appendChild(list1);

    var menu2=document.createElement("a");
     menu2.setAttribute('class','stats');
     menu2.href="#";
     menu2.textContent='Player stats';
     list1.appendChild(menu2);

     var list2=document.createElement("li");
      list2.setAttribute('class','listelements');
      unorderedlist.appendChild(list2);

    var menu3=document.createElement("a");
     menu3.setAttribute('class','stats');
     menu3.href="#";
     menu3.textContent='Tournaments';
   
     list2.appendChild(menu3);

     var list3=document.createElement("li");
     list3.setAttribute('class','listelements');
     unorderedlist.appendChild(list3);

    var menu4=document.createElement("a");
     menu4.setAttribute('class',"stats");
     menu4.href="#";
     menu4.textContent= 'Live Score';
     
     list3.appendChild(menu4);

     var list4=document.createElement("li");
      list4.setAttribute('class','listelements');
      unorderedlist.appendChild(list4);

    var menu5=document.createElement("a");
     menu5.setAttribute('class',"stats");
     menu5.href="adminReg.html";
    // menu5.setAttribute('onclick','loadAdmin()');
     menu5.textContent='Admin Login';
     
     list4.appendChild(menu5);

     var list5=document.createElement("li");
     list5.setAttribute('class','listelements');
     unorderedlist.appendChild(list5);

    var menu6=document.createElement("a");
     menu6.setAttribute('class',"stats");     
     menu6.href="playerReg.html";
   //  menu6.setAttribute('onclick','loadPlayer()');
     menu6.textContent='Players Registrations';
    
     list5.appendChild(menu6);
    
     const div1 = document.createElement('div');
     div1.setAttribute('id','appp');
    

    


     function adminReg(){
      navbar.style.visibility="hidden";
      document.body.setAttribute('onload','load()');
     }



}




 
    