window.onload = showDisplay();

function showDisplay()
{
    var Conatainer = document.createElement('div');
    Conatainer.className = "container";
    var div = document.createElement('div');

    var header = document.createElement('h1');
    header.textContent = "Modify Player Details";

    div.appendChild(header);
    
    var dropdown = document.createElement('select');
    dropdown.setAttribute('class','dropbox');
    var option=document.createElement('option');
    option.textContent="Select Player";
    var option1=document.createElement('option');
    option1.textContent="Team 1";
    var option2=document.createElement('option');
    option2.textContent="Team 2";
    var option3=document.createElement('option');
    option3.textContent="Team 3";
    var option4=document.createElement('option');
    option4.textContent="Team 4";

    dropdown.appendChild(option);
    dropdown.appendChild(option1);
    dropdown.appendChild(option2);
    dropdown.appendChild(option3);
    dropdown.appendChild(option4);

    div.appendChild(dropdown);

    var changeDiv = document.createElement('div');

    var Tlabel = document.createElement('label');
    Tlabel.textContent = "Team";
    changeDiv.appendChild(Tlabel);

    var Tinput = document.createElement('option');
    


    Conatainer.appendChild(div);
    document.body.appendChild(Conatainer);
}