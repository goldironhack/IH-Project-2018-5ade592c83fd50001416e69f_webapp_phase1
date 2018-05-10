
var map;
var boroughs = {
	"Bronx" : ["District 1", "District 2", "District 3", "District 4", "District 5", "District 6", "District 7", "District 8", "District 9", "District 10", "District 12"],
	"Brooklyn" : ["District 1", "District 2", "District 3", "District 4", "District 5", "District 6", "District 7", "District 8", "District 9", "District 10", "District 12", "District 13", "District 14", "District 15", "District 16", "District 17", "District 18"],
	"Manhattan" : ["District 1", "District 2", "District 3", "District 4", "District 5", "District 6", "District 7", "District 8", "District 9", "District 10", "District 12"],
	"Queens" : ["District 1", "District 2", "District 3", "District 4", "District 5", "District 6", "District 7", "District 8", "District 9", "District 10", "District 12", "District 13", "District 14"],
	"Staten" : ["District 1", "District 2", "District 3"]
};


function onGoogleMapResponse(){
	map = new google.maps.Map(document.getElementById('googleMapContainer'), {
		zoom: 10,
    mapTypeId: 'hybrid'

	});

	var country = "New York";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address' : country}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
		}
	});
}

function onBronx(){
	map = new google.maps.Map(document.getElementById('googleMapContainer'), {
		zoom: 12,
    mapTypeId: 'hybrid'

	});

	var country = "The Bronx";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address' : country}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
		}
	});
}

function onBrooklyn(){
	map = new google.maps.Map(document.getElementById('googleMapContainer'), {
		zoom: 12,
    mapTypeId: 'hybrid'

	});

	var country = "Brooklyn";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address' : country}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
		}
	});
}

function onManhattan(){
	map = new google.maps.Map(document.getElementById('googleMapContainer'), {
		zoom: 12,
    mapTypeId: 'hybrid'

	});

	var country = "Manhattan";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address' : country}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
		}
	});
}

function onQueens(){
	map = new google.maps.Map(document.getElementById('googleMapContainer'), {
		zoom: 12,
    mapTypeId: 'hybrid'

	});

	var country = "Queens";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address' : country}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
		}
	});
}

function onStaten(){
	map = new google.maps.Map(document.getElementById('googleMapContainer'), {
		zoom: 12,
    mapTypeId: 'hybrid'

	});

	var country = "Staten Island";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address' : country}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
		}
	});
}

var button = document.getElementById("close");
var table=document.getElementById("newTable");

function displayBronx() {
	for (var i = 0; i < boroughs["Bronx"].length ; i++) {
		var row = table.insertRow();
		var cell = row.insertCell(0);
		cell.innerHTML = boroughs["Bronx"][i];
	}
	button.style.visibility = "visible";
	$("#close").on("click", hideBronx);
}
function hideBronx() {
	for (var i = 0; i < boroughs["Bronx"].length ; i++) {
		table.deleteRow(-1);
	}
	button.style.visibility = "hidden";
}

function displayBrooklyn() {
	for (var i = 0; i < boroughs["Brooklyn"].length ; i++) {
		var row = table.insertRow();console.log(i);
		var cell = row.insertCell(0);
		cell.innerHTML = boroughs["Brooklyn"][i];
	}
	button.style.visibility = "visible";
	$("#close").on("click", hideBrooklyn);
}
function hideBrooklyn() {
	for (var i = 0; i < boroughs["Brooklyn"].length ; i++) {
		table.deleteRow(-1);
	}
	button.style.visibility = "hidden";
}

function displayManhattan() {
	for (var i = 0; i < boroughs["Manhattan"].length ; i++) {
		var row = table.insertRow();
		var cell = row.insertCell(0);
		cell.innerHTML = boroughs["Manhattan"][i];
	}
	button.style.visibility = "visible";
	$("#close").on("click", hideManhattan);
}
function hideManhattan() {
	for (var i = 0; i < boroughs["Manhattan"].length ; i++) {
		table.deleteRow(-1);
	}
	button.style.visibility = "hidden";
}

function displayQueens() {
	for (var i = 0; i < boroughs["Queens"].length ; i++) {
		var row = table.insertRow();
		var cell = row.insertCell(0);
		cell.innerHTML = boroughs["Queens"][i];
	}
	button.style.visibility = "visible";
	$("#close").on("click", hideQueens);
}
function hideQueens() {
	for (var i = 0; i < boroughs["Queens"].length ; i++) {
		table.deleteRow(-1);
	}
	button.style.visibility = "hidden";
}

function displayStaten() {
	for (var i = 0; i < boroughs["Staten"].length ; i++) {
		var row = table.insertRow();
		var cell = row.insertCell(0);
		cell.innerHTML = boroughs["Staten"][i];
	}
	button.style.visibility = "visible";
	$("#close").on("click", hideStaten);
}
function hideStaten() {
	for (var i = 0; i < boroughs["Staten"].length ; i++) {
		table.deleteRow(-1);
	}
	button.style.visibility = "hidden";
}

$(document).ready( function() {
	button.style.visibility = "hidden";
	$("#close").on("click", onGoogleMapResponse);
	$("#T").on("click", onBronx);
	$("#T").on("click", displayBronx);
  $("#B").on("click", onBrooklyn);
	$("#B").on("click", displayBrooklyn);
  $("#M").on("click", onManhattan);
	$("#M").on("click", displayManhattan);
  $("#Q").on("click", onQueens);
	$("#Q").on("click", displayQueens);
  $("#S").on("click", onStaten);
	$("#S").on("click", displayStaten);
})
