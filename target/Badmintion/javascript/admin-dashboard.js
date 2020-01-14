window.onload = load();

function load()
{
    const div = document.createElement('div');
    const action = actions()
    div.appendChild(action);
    document.body.appendChild(div);
}


function actions()
{
    const innerDiv = document.createElement('div');
    const AddPlayerdiv = document.createElement('div');
    const label = document.createElement('h5');
    label.textContent = "hello";
    AddPlayerdiv.appendChild(label);
    innerDiv.appendChild(AddPlayerdiv);
    return innerDiv;
}