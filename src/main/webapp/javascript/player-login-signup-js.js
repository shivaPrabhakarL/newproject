var pcall = 1
function loadPlayer( ){
    if(pcall > 1){
        const body = document.body;
       try{
         body.removeChild(document.getElementById('adminForm'));
       }catch(error){
            try{
                body.removeChild(document.getElementById('playerForm'));
            }catch(error){}
       }
       pcall = 0;
        loadPlayer();
        //window.stop();
    }
    else{
        const body = document.getElementById('consist');
        try{
            body.removeChild(document.getElementById('adminForm'));
        }catch(error){
            try{
                body.removeChild(document.getElementById('playerForm'));
            }catch(error){}
        }

       // window.location.reload();
    const pformContainer = document.createElement('div');
    pformContainer.setAttribute('id','playerForm');
     const pform1 = psignUpFunction();
     const pform2 = plogInFunction()
     pformContainer.appendChild(pform1);
     pformContainer.appendChild(pform2);
    document.body.appendChild(pformContainer);
    pcall += 1;
    window.stop();
    }

}


function plogInFunction(){
    const plogInDiv = document.createElement('div');
     plogInDiv.setAttribute('id','logindiv');
     const ptable = document.createElement('table');
     const ptbody = document.createElement('tbody');
     const ptr1 = document.createElement('tr');
    const ptr2 = document.createElement('tr');
    const ptr3 = document.createElement('tr');
    const ptd1  = document.createElement('td');
    const ptd2  = document.createElement('td');
    const ptd3  = document.createElement('td');
    const ptd4  = document.createElement('td');
    const ptd5  = document.createElement('td');

    ptbody.appendChild(ptr1);
    ptbody.appendChild(ptr2);
    ptbody.appendChild(ptr3);

    ptr1.appendChild(ptd1);
    ptr1.appendChild(ptd2);
    ptr2.appendChild(ptd3);
    ptr2.appendChild(ptd4);
    ptr3.appendChild(ptd5);

    const psh1 = document.createElement('h1');
    psh1.textContent = "Log In";
    psh1.style.textAlign = "center";
    plogInDiv.appendChild(psh1);


    const plogInForm = document.createElement('form');
    plogInForm.setAttribute('method','POST');
    plogInForm.setAttribute('action','AdminLogIn');


    const pemailLabel = document.createElement('label');
    pemailLabel.textContent = "Email : ";
    const pemailInput = document.createElement('input');
    pemailInput.setAttribute('name','email');
    pemailInput.setAttribute('type','email');

    const ppasswordLabel = document.createElement('label');
    ppasswordLabel.textContent = "Password : ";
    const ppasswordInput = document.createElement('input');
    ppasswordInput.setAttribute('name','password');
    ppasswordInput.setAttribute('type','password');

    const plogInButton = document.createElement('input');
    plogInButton.setAttribute('type','submit');
    plogInButton.setAttribute('value','Sign Up');
    plogInButton.style.alignContent = "centre";


    ptd1.appendChild(pemailLabel);
    ptd2.appendChild(pemailInput);
    ptd3.appendChild(ppasswordLabel);
    ptd4.appendChild(ppasswordInput);
    ptd5.appendChild(plogInButton);

    ptable.appendChild(ptbody);
    plogInForm.appendChild(ptable);
    plogInDiv.appendChild(plogInForm);
    return plogInDiv;

}


function psignUpFunction(){

    const psignUpDiv = document.createElement('div');
    psignUpDiv.setAttribute('id','signupdiv');

    const pptable = document.createElement('table');
    const pptbody = document.createElement('tbody');

    const pptr1 = document.createElement('tr');
    const pptr2 = document.createElement('tr');
    const pptr3 = document.createElement('tr');
    const pptr4 = document.createElement('tr');
    const pptr5 = document.createElement('tr');
    const pptr6 = document.createElement('tr');
    const pptr7 = document.createElement('tr');
    const pptr8 = document.createElement('tr');
    const pptr9 = document.createElement('tr');
    const pptr10 = document.createElement('tr');
    const pptr11 = document.createElement('tr');
    const pptr12 = document.createElement('tr');
    const pptr13 = document.createElement('tr');

    const pptd1  = document.createElement('td');
    const pptd2  = document.createElement('td');
    const pptd3  = document.createElement('td');
    const pptd4  = document.createElement('td');
    const pptd5  = document.createElement('td');
    const pptd6  = document.createElement('td');
    const pptd7  = document.createElement('td');
    const pptd8  = document.createElement('td');
    const pptd9  = document.createElement('td');
    const pptd10  = document.createElement('td');
    const pptd11 = document.createElement('td');
    const pptd12 = document.createElement('td');
    const pptd13 = document.createElement('td');
    const pptd14 = document.createElement('td');
    const pptd15 = document.createElement('td');
    const pptd16 = document.createElement('td');
    const pptd17 = document.createElement('td');
    const pptd18 = document.createElement('td');
    const pptd19 = document.createElement('td');
    const pptd20 = document.createElement('td');
    const pptd21 = document.createElement('td');
    const pptd22 = document.createElement('td');
    const pptd23 = document.createElement('td');

    pptbody.appendChild(pptr1);
    pptbody.appendChild(pptr2);
    pptbody.appendChild(pptr3);
    pptbody.appendChild(pptr4);
    pptbody.appendChild(pptr5);
    pptbody.appendChild(pptr6);
    pptbody.appendChild(pptr7);
    pptbody.appendChild(pptr8);
    pptbody.appendChild(pptr9);
    pptbody.appendChild(pptr10);
    pptbody.appendChild(pptr11);
    pptbody.appendChild(pptr12);
    pptbody.appendChild(pptr13);

    pptr1.appendChild(pptd1);
    pptr1.appendChild(pptd2);
    pptr2.appendChild(pptd3);
    pptr2.appendChild(pptd4);
    pptr3.appendChild(pptd5);
    pptr3.appendChild(pptd6);
    pptr4.appendChild(pptd7);
    pptr4.appendChild(pptd8);
    pptr5.appendChild(pptd9);
    pptr5.appendChild(pptd10);
    pptr6.appendChild(pptd11);
    pptr6.appendChild(pptd12);
    pptr7.appendChild(pptd13);
    pptr7.appendChild(pptd14);
    pptr8.appendChild(pptd15);
    pptr8.appendChild(pptd16);
    pptr9.appendChild(pptd17);
    pptr9.appendChild(pptd18);
    pptr10.appendChild(pptd19);
    pptr10.appendChild(pptd20);
    pptr11.appendChild(pptd21);
    pptr11.appendChild(pptd22);
    pptr12.appendChild(pptd23);

    pptable.appendChild(pptbody);
    pptbody.style.align = "center";


    const ppsh1 = document.createElement('h1');
    ppsh1.textContent = "Sign Up";
    ppsh1.style.textAlign = "center";
    psignUpDiv.appendChild(ppsh1);

    const ppsignUpForm = document.createElement('form');
    ppsignUpForm.setAttribute('method','POST');
    ppsignUpForm.setAttribute('action','PlayerServlet');

    const ppfirstNameLabel  = document.createElement('label');
    ppfirstNameLabel.textContent = "First Name : ";
    const ppfirstNameInput = document.createElement('input');
    ppfirstNameInput.setAttribute('name','firstName');
    ppfirstNameInput.setAttribute('type','text');

    const pplastNameLabel = document.createElement('label');
    pplastNameLabel.textContent = "Last Name : ";
    const pplastNameInput = document.createElement('input');
    pplastNameInput.setAttribute('name','lastName');
    pplastNameInput.setAttribute('type','text');

    const ppuserNameLabel = document.createElement('label');
    ppuserNameLabel.textContent = "User Name : ";
    const ppuserNameInput = document.createElement('input');
    ppuserNameInput.setAttribute('name','userName');
    ppuserNameInput.setAttribute('type','text');

   const ppemailLabel = document.createElement('label');
   ppemailLabel.textContent = "Email : ";
   const ppemailInput = document.createElement('input');
   ppemailInput.setAttribute('name','email');
   ppemailInput.setAttribute('type','email');

   const ppgenderLabel = document.createElement('label');
   ppgenderLabel.textContent = "Gender : ";
   const ppgenderInput = document.createElement('input');
   ppgenderInput.setAttribute('name','gender');
   ppgenderInput.setAttribute('type','gender');

   const ppimageLabel = document.createElement('label');
   ppimageLabel.textContent = "Image : ";
   const ppimageInput = document.createElement('input');
   ppimageInput.setAttribute('name','image');
   ppimageInput.setAttribute('type','text');

   const ppphoneLabel = document.createElement('label');
   ppphoneLabel.textContent = "phone : ";
   const ppphoneInput = document.createElement('input');
   ppphoneInput.setAttribute('name','phone');
   ppphoneInput.setAttribute('type','text');

   const ppshirtSizeLabel = document.createElement('label');
   ppshirtSizeLabel.textContent = "ShirtSize : ";
   const ppshirtSizeInput = document.createElement('input');
   ppshirtSizeInput.setAttribute('name','shirtSize');
   ppshirtSizeInput.setAttribute('type','text');

   const ppempIdLabel = document.createElement('label');
   ppempIdLabel.textContent = "empId : ";
   const ppempIdInput = document.createElement('input');
   ppempIdInput.setAttribute('name','empId');
   ppempIdInput.setAttribute('type','text');

   const ppageLabel = document.createElement('label');
   ppageLabel.textContent = "age : ";
   const ppageInput = document.createElement('input');
   ppageInput.setAttribute('name','age');
   ppageInput.setAttribute('type','text');


   const pppasswordLabel = document.createElement('label');
   pppasswordLabel.textContent = "Password : ";
   const pppasswordInput = document.createElement('input');
   pppasswordInput.setAttribute('name','password');
   pppasswordInput.setAttribute('type','password');

   const ppsignUpButton = document.createElement('input');
   ppsignUpButton.setAttribute('type','submit');
   ppsignUpButton.setAttribute('value','Sign Up');
   ppsignUpButton.style.alignContent = "centre";

   pptd1.appendChild(ppfirstNameLabel);
   pptd2.appendChild(ppfirstNameInput);

   pptd3.appendChild(pplastNameLabel);
   pptd4.appendChild(pplastNameInput);

   pptd5.appendChild(ppuserNameLabel);
   pptd6.appendChild(ppuserNameInput);

   pptd7.appendChild(ppemailLabel);
   pptd8.appendChild(ppemailInput);

   pptd9.appendChild(ppgenderLabel);
   pptd10.appendChild(ppgenderInput);

   pptd11.appendChild(ppimageLabel);
   pptd12.appendChild(ppimageInput);

   pptd13.appendChild(ppphoneLabel);
   pptd14.appendChild(ppphoneInput);

   pptd15.appendChild(ppshirtSizeLabel);
   pptd16.appendChild(ppshirtSizeInput);

   pptd17.appendChild(ppempIdLabel);
   pptd18.appendChild(ppempIdInput);

   pptd19.appendChild(ppageLabel);
   pptd20.appendChild(ppageInput);

   pptd21.appendChild(pppasswordLabel);
   pptd22.appendChild(pppasswordInput);

   pptd23.appendChild(ppsignUpButton);

   ppsignUpForm.appendChild(pptable);



   psignUpDiv.appendChild(ppsignUpForm);
   return psignUpDiv;

}