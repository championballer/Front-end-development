var p1score = document.querySelector("#p1score");
var p2score = document.querySelector("#p2score");
var playingtill = document.querySelector("#playingtill");
var p1button = document.querySelector("#p1but");
var p2button = document.querySelector("#p2but");
var reset = document.querySelector("#reset");
var inbut = document.querySelector("#inbut");

/*
alert(p1score.textContent);
alert(p2score.textContent);
*/


var gamestatus = false;
//alert(inbut);
//playingtill.textContent = String(Number(playingtill.textContent)+5);

p1button.addEventListener("click",function(){
	if(!gamestatus && p1score.textContent!==playingtill.textContent)
	{
		p1score.textContent = String(Number(p1score.textContent)+1);
		if(p1score.textContent===playingtill.textContent)
		{
			gamestatus = true;
			p1score.classList.add("gameover");
		}
	}
});

p2button.addEventListener("click",function(){
	if(!gamestatus && p2score.textContent!==playingtill.textContent)
	{
		p2score.textContent = String(Number(p2score.textContent)+1);
		if(p2score.textContent===playingtill.textContent)
		{
			gamestatus = true;
			p2score.classList.add("gameover");
		}
	}
});

reset.addEventListener("click",function(){

	p1score.textContent = '0';
	p2score.textContent = '0';
	gamestatus = false;
	p1score.classList.remove("gameover");
	p2score.classList.remove("gameover");
});

inbut.addEventListener("change",function(){

	playingtill.textContent = inbut.value;
	p1score.textContent = '0';
	p2score.textContent = '0';
	gamestatus = false;
	p1score.classList.remove("gameover");
	p1score.classList.remove("gameover");
});
//p1score.innerHTML = "<span>1</span> to <span>5</span>";

