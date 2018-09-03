var element = document.querySelector("button");
var body = document.querySelector("body");
var flag = 1;

element.style.padding = "0px";
element.addEventListener("click",function() {
	if(flag===1)
	{
		//element.style.background = "purple";
		body.style.background = "blue";
		flag = 0;
	}
	
	else
	{	
		//element.style.background = "white";
		body.style.background = "white";
		flag = 1;
	}
});
