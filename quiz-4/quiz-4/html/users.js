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
  console.log(data);
  var Result = "<table border='1'>";
      Result += "<tr> <th>Created At</th><th>Email</th><th>Id</th><th>Is Suspended</th><th>UserName</th></tr>";
      

  for( i =0; i< data.length; i++){
      
     
      Result +="<tr>";
      Result += "<td>" + data[i].createdAt + "</td>";
      Result += "<td>" + data[i].email + "</td>";
      Result += "<td>" + data[i].id + "</td>";
      Result += "<td>" + data[i].isSuspended + "</td>";
      Result += "<td>" + data[i].userName + "</td>";
      
      Result +="</tr>";
    
    
  } 
  Result +="</table>";
  document.getElementById("demo").innerHTML=Result;
  // render data in html table
});