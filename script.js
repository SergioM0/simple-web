function myFunction() {
    var elemento = document.getElementById('pls').value;
      if (elemento == 1) {
          var div = document.createElement('div');
          document.body.appendChild(div);
          var content = document.createTextNode("whoami ejeje");
          div.appendChild(content);

          switch (pls) {
              case 1:
              console.log("1");
                  break;
              case 2:
              console.log("");
                  break;
          }
    }
}
