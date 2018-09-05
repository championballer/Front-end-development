var colors = ["rgb(255, 0, 0)",
		"rgb(0, 255, 0)",
		"rgb(0, 0, 255)",
		"rgb(255, 255, 0)",
		"rgb(0, 255, 255)",
		"rgb(255, 0, 255)"];
	 
var squares = document.querySelectorAll(".square");
var colorSelected = colors[3];
var message = document.querySelector("#message");

var helement = document.querySelector("#helement");
helement.textContent = colorSelected;
for(var i = 0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = colors[i];
	
	squares[i].addEventListener("click",function(){
		var clicked = this.style.backgroundColor;
		if(clicked == colorSelected)
		{
			colorsync(clicked);
			message.textContent = "Correct";
		}
		
		else
		{
			this.style.backgroundColor="black";
			message.textContent = "Try Again";
		}
		
	});
}	  


function colorsync(color)
{
	for(var j = 0;j<squares.length;j++)
	{
		squares[j].style.backgroundColor = color;
	}
}

