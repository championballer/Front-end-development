function resetfunc()
{
	colors = generateColors(choice);
	h1.style.backgroundColor = "black";
	setup();
	colorSelected = picker();
	helement.textContent = colorSelected;
	message.textContent="";
	reset.textContent = "New Colors";
}

function setup()
{
	for(var i = 0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
	
		squares[i].addEventListener("click",function(){
		var clicked = this.style.backgroundColor;
		if(clicked === colorSelected)
		{
			colorsync(clicked);
			message.textContent = "Correct";
			h1.style.backgroundColor = clicked;
			reset.textContent = "Play Again?";
		}
		
		else
		{
			this.style.backgroundColor="black";
			message.textContent = "Try Again";
		}
		
		});
	}	  

}


function colorsync(color)
{
	for(var j = 0;j<choice;j++)
	{
		squares[j].style.backgroundColor = color;
	}
}

function generateColors(choice)
{
	var arr = [];
	
	for(var i = 0;i<choice;i++)
	{
		arr.push(generateColor());
	}
	
	if(choice==3)
	{
		for(var i = 3;i<6;i++)
		{
			arr.push("rgb(0, 0, 0)");
		}
	}
	
	return arr;
}

function generateColor()
{
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	
	return "rgb("+r+", "+g+", "+b+")";

}


function picker()
{
	var picked = Math.floor(Math.random()*(choice));
	return colors[picked];
}



var easybut = document.querySelector("#easbut");
var hardbut = document.querySelector("#hardbut");
var choice = 6;

easybut.addEventListener("click",function(){
	choice = 3;
	resetfunc();
	helement.textContent = colorSelected;
	this.classList.add("selected");
	hardbut.classList.remove("selected");
});

hardbut.addEventListener("click",function(){
	choice = 6;
	resetfunc();
	helement.textContent = colorSelected;	
	this.classList.add("selected");
	easbut.classList.remove("selected");
});

var colors = generateColors(choice);
var squares = document.querySelectorAll(".square");
var colorSelected = picker();
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

setup();
reset.addEventListener("click",resetfunc);


var helement = document.querySelector("#helement");
helement.textContent = colorSelected;




