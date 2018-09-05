var choice = Number(prompt("3 or 6"));

var colors = generateColors(choice);
var squares = document.querySelectorAll(".square");
var colorSelected = picker();
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

setup();
reset.addEventListener("click",function(){
	colors = generateColors(choice);
	h1.style.backgroundColor = "black";
	setup();
	colorSelected = picker();
	message.textContent="";
	reset.textContent = "New Colors";
});

var helement = document.querySelector("#helement");
helement.textContent = colorSelected;

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
	for(var j = 0;j<squares.length;j++)
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
	var picked = Math.floor(Math.random()*(colors.length));
	return colors[picked];
}



