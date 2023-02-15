function myFunction() {
    var elemento = document.getElementById('pls').value;
    if (elemento == 1) {
    }

 

    switch (elemento) {
        case "1":
            var div = document.createElement('div')
            div.setAttribute('id', 'output');
            document.body.appendChild(div);
            var content = document.createTextNode(whoami);
            div.appendChild(content);
            break;
        case "2":
            var div = document.createElement('div');
            document.body.appendChild(div);
            var content = document.createTextNode("I dont really do nothing");
            div.appendChild(content);
            break;
        case "3":
            output.remove();
            break;

        default:
            alert("ERROR");
    } 
    }
    

