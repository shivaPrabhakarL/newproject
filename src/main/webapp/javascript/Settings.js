window.onload = showDisplay();

function showDisplay()
{
    var Conatainer = document.createElement('div');
    Conatainer.className = "container";
    
    var div = document.createElement('div');
    div.setAttribute('class','cards');
    var header = document.createElement('h2');
    header.textContent = "Change Password";
    div.appendChild(header);

    var label1 = document.createElement('label');
    label1.textContent = "Enter Old Password :";
    var password1 = document.createElement('input');

    var label2 = document.createElement('label');
    label2.textContent = "Enter New Password :";
    var password2 = document.createElement('input');
   
    div.appendChild(label1);
    div.appendChild(password1);
    div.appendChild(label2);
    div.appendChild(password2);

    Conatainer.appendChild(div);

    document.body.appendChild(Conatainer);

}