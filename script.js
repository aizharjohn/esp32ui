// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "your api key here",
  	authDomain: "your auth domain here",
  	databaseURL: "your database url here",
  	projectId: "your project id here",
  	storageBucket: "your storage bucket here",
  	messagingSenderId: "your messaging sender id here",
  	appId: "your app id here",
  	measurementId: "your measurement id here"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
	var database = firebase.database();
	var Led1Status;
	var Led2Status;
	var Led3Status;
	var Led4Status;
	
	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		Led2Status = snap.val().Led2Status;
		Led3Status = snap.val().Led3Status;
		Led4Status = snap.val().Led4Status;
		if(Led1Status == 1){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
		if(Led2Status == 1){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
		if(Led3Status == 1){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
		}
		if(Led4Status == 1){
			document.getElementById("unact3").style.display = "none";
			document.getElementById("act3").style.display = "block";
		} else {
			document.getElementById("unact3").style.display = "block";
			document.getElementById("act3").style.display = "none";
		}
	});

	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");
		if(Led1Status == 1){
			firebaseRef.set(0);
			Led1Status = 0;
		} else {
			firebaseRef.set(1);
			Led1Status = parseInt(1);
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref().child("Led2Status");
		if(Led2Status == 1){
			firebaseRef.set(0);
			Led2Status = 0;
		} else {
			firebaseRef.set(1);
			Led2Status = 1;
		}
	})
	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref().child("Led3Status");
		if(Led3Status == 1){
			firebaseRef.set(0);
			Led3Status = 0;
		} else {
			firebaseRef.set(1);
			Led3Status = 1;
		}
	})
	$(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref().child("Led4Status");
		if(Led4Status == 1){
			firebaseRef.set(0);
			Led4Status = 0;
		} else {
			firebaseRef.set(1);
			Led4Status = 1;
		}
	})
});