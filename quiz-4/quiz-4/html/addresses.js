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
      Result += "<tr> <th>Country</th><th>State</th><th>City</th><th>Zip</th><th>Id</th></tr>";
      

  for( i =0; i< data.length; i++){
      
    for( j =0; j< data[i].address.length; j++){ 
      Result +="<tr>";
      Result += "<td>" + data[i].address[j].country + "</td>";
      Result += "<td>" + data[i].address[j].state + "</td>";
      Result += "<td>" + data[i].address[j].city + "</td>";
      Result += "<td>" + data[i].address[j].zipCode + "</td>";
      Result += "<td>" + data[i].address[j].id + "</td>";
      
      Result +="</tr>";
    }
    
  } 
  Result +="</table>";
  document.getElementById("demo").innerHTML=Result;
});