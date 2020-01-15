var call = 1

function loadAdmin(){
    
    
    if(call > 1){
        const body = document.body;
       // window.location.reload();
       try{
         body.removeChild(document.getElementById('playerForm'));
       }catch(error){
            try{
                body.removeChild(document.getElementById('adminForm'));
            }catch(error){}
       }
       call = 0;
      loadAdmin();
       
    }
    else{
        const body = document.getElementById('consist');
      try{
               body.removeChild(document.getElementById('playerForm'));
      }catch(error){
         try{
             body.removeChild(document.getElementById('adminForm'));
         }catch(error){}
      }

       // window.location.reload();
        const formContainer = document.createElement('div');
        formContainer.setAttribute('id','adminForm');
        const form1 = signUpFunction();
        const form2 = logInFunction()
        formContainer.appendChild(form1);
        formContainer.appendChild(form2);
        document.body.appendChild(formContainer);
        console.log(call);
        call += 1;
        window.stop();
    }

}


function logInFunction(){
    const logInDiv = document.createElement('div');
     logInDiv.setAttribute('id','logindiv');
     const table = document.createElement('table');
     const tbody = document.createElement('tbody');
     const tr1 = document.createElement('tr');
    const tr2 = document.createElement('tr');
    const tr3 = document.createElement('tr');
    const td1  = document.createElement('td');
    const td2  = document.createElement('td');
    const td3  = document.createElement('td');
    const td4  = document.createElement('td');
    const td5  = document.createElement('td');

    tbody.appendChild(tr1);
    tbody.appendChild(tr2);
    tbody.appendChild(tr3);

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr3.appendChild(td5);

    const sh1 = document.createElement('h1');
    sh1.textContent = "Log In";
    sh1.style.textAlign = "center";
    logInDiv.appendChild(sh1);


    const logInForm = document.createElement('form');
    logInForm.setAttribute('method','POST');
    logInForm.setAttribute('action','AdminLogIn');


    const emailLabel = document.createElement('label');
    emailLabel.textContent = "Email : ";
    const emailInput = document.createElement('input');
    emailInput.setAttribute('name','email');
    emailInput.setAttribute('type','email');

    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = "Password : ";
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('name','password');
    passwordInput.setAttribute('type','password');

    const logInButton = document.createElement('input');
    logInButton.setAttribute('type','submit');
    logInButton.setAttribute('value','Sign Up');
    logInButton.style.alignContent = "centre";


    td1.appendChild(emailLabel);
    td2.appendChild(emailInput);
    td3.appendChild(passwordLabel);
    td4.appendChild(passwordInput);
    td5.appendChild(logInButton);
    
    table.appendChild(tbody);
    logInForm.appendChild(table);
    logInDiv.appendChild(logInForm);
    return logInDiv;
     
}


function signUpFunction(){

    const signUpDiv = document.createElement('div');
    signUpDiv.setAttribute('id','signupdiv');

    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const tr1 = document.createElement('tr');
    const tr2 = document.createElement('tr');
    const tr3 = document.createElement('tr');
    const tr4 = document.createElement('tr');
    const tr5 = document.createElement('tr');
    const tr6 = document.createElement('tr');
    const td1  = document.createElement('td');
    const td2  = document.createElement('td');
    const td3  = document.createElement('td');
    const td4  = document.createElement('td');
    const td5  = document.createElement('td');
    const td6  = document.createElement('td');
    const td7  = document.createElement('td');
    const td8  = document.createElement('td');
    const td9  = document.createElement('td');
    const td10  = document.createElement('td');
    const td11 = document.createElement('td');
    
    tbody.appendChild(tr1);
    tbody.appendChild(tr2);
    tbody.appendChild(tr3);
    tbody.appendChild(tr4);
    tbody.appendChild(tr5);
    tbody.appendChild(tr6);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr5.appendChild(td9);
    tr5.appendChild(td10);
    tr6.appendChild(td11);
    table.appendChild(tbody);
    tbody.style.align = "center";

    
    const sh1 = document.createElement('h1');
    sh1.textContent = "Sign Up";
    sh1.style.textAlign = "center";
    signUpDiv.appendChild(sh1);

    const signUpForm = document.createElement('form');
    signUpForm.setAttribute('method','POST');
    signUpForm.setAttribute('action','AdminSignUp');

    const firstNameLabel  = document.createElement('label');
    firstNameLabel.textContent = "First Name : ";
    const firstNameInput = document.createElement('input');
    firstNameInput.setAttribute('name','firstName');
    firstNameInput.setAttribute('type','text');

    const lastNameLabel = document.createElement('label');
    lastNameLabel.textContent = "Last Name : ";
    const lastNameInput = document.createElement('input');
    lastNameInput.setAttribute('name','lastName');
    lastNameInput.setAttribute('type','text');

    const userNameLabel = document.createElement('label');
    userNameLabel.textContent = "User Name : ";
    const userNameInput = document.createElement('input');
    userNameInput.setAttribute('name','userName');
    userNameInput.setAttribute('type','text');

   const emailLabel = document.createElement('label');
   emailLabel.textContent = "Email : ";
   const emailInput = document.createElement('input');
   emailInput.setAttribute('name','email');
   emailInput.setAttribute('type','email');

   const passwordLabel = document.createElement('label');
   passwordLabel.textContent = "Password : ";
   const passwordInput = document.createElement('input');
   passwordInput.setAttribute('name','password');
   passwordInput.setAttribute('type','password');

   const signUpButton = document.createElement('input');
   signUpButton.setAttribute('type','submit');
   signUpButton.setAttribute('value','Sign Up');
   signUpButton.style.alignContent = "centre";

   td1.appendChild(firstNameLabel);
   td2.appendChild(firstNameInput);
   
   td3.appendChild(lastNameLabel);
   td4.appendChild(lastNameInput);
   td5.appendChild(userNameLabel);
   td6.appendChild(userNameInput);
   td7.appendChild(emailLabel);
   td8.appendChild(emailInput);
   td9.appendChild(passwordLabel);
   td10.appendChild(passwordInput);
   td11.appendChild(signUpButton);
   
   signUpForm.appendChild(table);



   signUpDiv.appendChild(signUpForm);
   return signUpDiv;
   
}