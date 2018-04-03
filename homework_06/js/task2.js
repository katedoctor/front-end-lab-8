const btn = document.getElementById("btnIP"),
      btnResponse = document.getElementById("btn-response"),
      ip = document.getElementById("form-input"),
      respon = document.getElementById("response-result");
let response;

btn.onclick = function() {
  if(validateIP(ip)){
  const url = `https://ipapi.co/${ip.value}/json/`;
  http.get(url).then(result => {
    response = result;
    createTable(JSON.parse(result));
  });
  }else{
    alert('Error:you have entered an invalid IP address' );
  }
}

  function validateIP(ip) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip.value)) {
      return true;
    }else{
      return false;
    }
  }

  function createTable(data) {
    var table = document.createElement("table");
    var tablePlace = document.getElementById("table");
     for( var key in data) {
      table.innerHTML +=
        `<tr>
          <td>${key}</td>
          <td>${data[key]}</td>
      </tr> `;
      tablePlace.appendChild(table);
     }
    }


  btnResponse.onclick = function() {
    const url = "https://shrouded-garden-94580.herokuapp.com/";
    http.post(url, response).then((response) => {
    respon.innerHTML = response;
    });
  }
