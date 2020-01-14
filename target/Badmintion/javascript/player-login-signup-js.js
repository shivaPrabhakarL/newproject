function load( ){
    const formContainer = document.createElement('div');
     const form1 = signUpFunction();
     const form2 = logInFunction()
     formContainer.appendChild(form1);
     formContainer.appendChild(form2);
    document.body.appendChild(formContainer);

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
    const tr7 = document.createElement('tr');
    const tr8 = document.createElement('tr');
    const tr9 = document.createElement('tr');
    const tr10 = document.createElement('tr');
    const tr11 = document.createElement('tr');
    const tr12 = document.createElement('tr');
    const tr13 = document.createElement('tr');

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
    const td12 = document.createElement('td');
    const td13 = document.createElement('td');
    const td14 = document.createElement('td');
    const td15 = document.createElement('td');
    const td16 = document.createElement('td');
    const td17 = document.createElement('td');
    const td18 = document.createElement('td');
    const td19 = document.createElement('td');
    const td20 = document.createElement('td');
    const td21 = document.createElement('td');
    const td22 = document.createElement('td');
    const td23 = document.createElement('td');

    tbody.appendChild(tr1);
    tbody.appendChild(tr2);
    tbody.appendChild(tr3);
    tbody.appendChild(tr4);
    tbody.appendChild(tr5);
    tbody.appendChild(tr6);
    tbody.appendChild(tr7);
    tbody.appendChild(tr8);
    tbody.appendChild(tr9);
    tbody.appendChild(tr10);
    tbody.appendChild(tr11);
    tbody.appendChild(tr12);
    tbody.appendChild(tr13);

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
    tr6.appendChild(td12);
    tr7.appendChild(td13);
    tr7.appendChild(td14);
    tr8.appendChild(td15);
    tr8.appendChild(td16);
    tr9.appendChild(td17);
    tr9.appendChild(td18);
    tr10.appendChild(td19);
    tr10.appendChild(td20);
    tr11.appendChild(td21);
    tr11.appendChild(td22);
    tr12.appendChild(td23);

    table.appendChild(tbody);
    tbody.style.align = "center";


    const sh1 = document.createElement('h1');
    sh1.textContent = "Sign Up";
    sh1.style.textAlign = "center";
    signUpDiv.appendChild(sh1);

    const signUpForm = document.createElement('form');
    signUpForm.setAttribute('method','POST');
    signUpForm.setAttribute('action','PlayerServlet');

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

   const genderLabel = document.createElement('label');
   genderLabel.textContent = "Gender : ";
   const genderInput = document.createElement('input');
   genderInput.setAttribute('name','gender');
   genderInput.setAttribute('type','gender');

   const imageLabel = document.createElement('label');
   imageLabel.textContent = "Image : ";
   const imageInput = document.createElement('input');
   imageInput.setAttribute('name','image');
   imageInput.setAttribute('type','text');

   const phoneLabel = document.createElement('label');
   phoneLabel.textContent = "phone : ";
   const phoneInput = document.createElement('input');
   phoneInput.setAttribute('name','phone');
   phoneInput.setAttribute('type','text');

   const shirtSizeLabel = document.createElement('label');
   shirtSizeLabel.textContent = "ShirtSize : ";
   const shirtSizeInput = document.createElement('input');
   shirtSizeInput.setAttribute('name','shirtSize');
   shirtSizeInput.setAttribute('type','text');

   const empIdLabel = document.createElement('label');
   empIdLabel.textContent = "empId : ";
   const empIdInput = document.createElement('input');
   empIdInput.setAttribute('name','empId');
   empIdInput.setAttribute('type','text');

   const ageLabel = document.createElement('label');
   ageLabel.textContent = "age : ";
   const ageInput = document.createElement('input');
   ageInput.setAttribute('name','age');
   ageInput.setAttribute('type','text');


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

   td9.appendChild(genderLabel);
   td10.appendChild(genderInput);

   td11.appendChild(imageLabel);
   td12.appendChild(imageInput);

   td13.appendChild(phoneLabel);
   td14.appendChild(phoneInput);

   td15.appendChild(shirtSizeLabel);
   td16.appendChild(shirtSizeInput);

   td17.appendChild(empIdLabel);
   td18.appendChild(empIdInput);

   td19.appendChild(ageLabel);
   td20.appendChild(ageInput);

   td21.appendChild(passwordLabel);
   td22.appendChild(passwordInput);

   td23.appendChild(signUpButton);

   signUpForm.appendChild(table);



   signUpDiv.appendChild(signUpForm);
   return signUpDiv;

}