var output = "";
function clearInput() {
    // document.getElementById("name").innerHTML = "";
    document.getElementById("ID").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
}

const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
        if (target.readyState == 4 && target.status == 200) {
            callback(target.responseText);
        }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
};

function getData() {
    loadData("./project.json", createTable);
}

function createTable(response) {
    output = "<table border='1'>";
    output += "<tr><th>Id</th><th>FirstName</th><th>LastName</th></tr>"
    data = JSON.parse(response);
    data.forEach((each) => {
        output += "<tr>";
        output += "<td>" + each.id + "</td>";
        output += "<td>" + each.first_name + "</td>";
        output += "<td>" + each.last_name + "</td>";
        output += "</tr>";
    })
    output += "</table>";
    document.getElementById("table").innerHTML = output;
}
function filterFirstName() {
    first_name = document.getElementById("firstname").value;
    console.log(first_name);
    loadData("./project.json", filterFirstNameResponse);
}

function filterFirstNameResponse(response) {
    details = JSON.parse(response);
    console.log(details);
    first_name = document.getElementById("firstname").value;
    output = "<table border='1'>";
    output += "<tr><th>Id</th><th>FirstName</th><th>LastName</th></tr>"
    details.forEach((each) => {
        if (first_name == each.first_name) {
            output += "<tr>";
            output += "<td>" + each.id + "</td>";
            output += "<td>" + each.first_name + "</td>";
            output += "<td>" + each.last_name + "</td>";
            output += "</tr>";
        }
    })
    output += "</table>";
    document.getElementById("table").innerHTML = "";
    document.getElementById("table").innerHTML = output;
}


function filterID() {
    ID = document.getElementById("ID").value;
    console.log(ID);
    loadData("./project.json", filterIDResponse);
}

function filterIDResponse(response) {
    details = JSON.parse(response);
    console.log(details);
    ID = document.getElementById("ID").value;
    output = "<table border='1'>";
    output += "<tr><th>Id</th><th>FirstName</th><th>LastName</th></tr>"
    details.forEach((each) => {
        if (ID == each.id) {
            output += "<tr>";
            output += "<td>" + each.id + "</td>";
            output += "<td>" + each.first_name + "</td>";
            output += "<td>" + each.last_name + "</td>";
            output += "</tr>";
        }
    })
    output += "</table>";
    document.getElementById("table").innerHTML = "";
    document.getElementById("table").innerHTML = output;
}


function filterLastName() {
    last_name = document.getElementById("lastname").value;
    console.log(ID);
    loadData("./project.json", filterLastNameResponse);
}

function filterLastNameResponse(response) {
    details = JSON.parse(response);
    console.log(details);
    last_name = document.getElementById("lastname").value;
    output = "<table border='1'>";
    output += "<tr><th>Id</th><th>FirstName</th><th>LastName</th></tr>"
    details.forEach((each) => {
        if (last_name == each.last_name) {
            output += "<tr>";
            output += "<td>" + each.id + "</td>";
            output += "<td>" + each.first_name + "</td>";
            output += "<td>" + each.last_name + "</td>";
            output += "</tr>";
        }
    })
    output += "</table>";
    document.getElementById("table").innerHTML = "";
    document.getElementById("table").innerHTML = output;
}