var lis = document.querySelectorAll("li");
var clicked = [false,false,false];

alert(clicked.length);
for(var i = 0;i<lis.length;i++)
{
	lis[i].addEventListener("mouseover",function(){
		this.classList.add("colorchange");
	});
	
	lis[i].addEventListener("mouseout",function(){
		this.classList.remove("colorchange");
	});
	
	lis[i].addEventListener("click",function(){
		this.classList.add("strike");
		this.classList.add("colorchangeRed");	
			
	});
}
