const loadData = () =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open(
      "GET",
      `https://6253799f90266e3d0e0373e6.mockapi.io/ok/user`,
      true
    );
    xhttp.send();
  });

loadData().then((data) => {
  // render data in html table
  console.log(data);
  var Result = "<table border='1'>";
      Result += "<tr> <th>Age</th><th>Id</th><th>Manufacturer</th><th>Model</th><th>Type</th><th>UserId</th><th>Vin</th></tr>";
      

  for( i =0; i< data.length; i++){
      
    for( j =0; j< data[i].vehicle.length; j++){ 
      Result +="<tr>";
      Result += "<td>" + data[i].vehicle[j].age + "</td>";
      Result += "<td>" + data[i].vehicle[j].id + "</td>";
      Result += "<td>" + data[i].vehicle[j].manufacturer + "</td>";
      Result += "<td>" + data[i].vehicle[j].model + "</td>";
      Result += "<td>" + data[i].vehicle[j].type + "</td>";
      Result += "<td>" + data[i].vehicle[j].userId + "</td>";
      Result += "<td>" + data[i].vehicle[j].vin + "</td>";
      Result +="</tr>";
    }
    
  } 
  Result +="</table>";
  document.getElementById("demo").innerHTML=Result;


});