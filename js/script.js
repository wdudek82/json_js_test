var xmlhttp = new XMLHttpRequest();
var url = "../data.json";

function myFunction(arr) {
	var out = "";
	for(var i = 0; i < arr.length; i++) {
		out += '<p>' + arr[i].first + ' ' +
		arr[i].last + '</p>';
	}
	document.getElementById("id01").innerHTML = out;
}

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myArr = JSON.parse(this.responseText);
		myFunction(myArr.employees);
	}
};

xmlhttp.open("GET", url, true);
xmlhttp.send();