window.setTimeout(function() {
  // put all of your JS code from the lecture here
  var store=[];
var resp = prompt("What would you like to do?");

while(resp!="exit")
{

	if(resp==="list")
	{	
	console.log(store);
	}

	else if(resp==="add")
	{
	var ele = prompt("Please enter new objective:");
	store.push(ele);
	}
	
	resp = prompt("now what do you want to do?");
}
}, 500);

