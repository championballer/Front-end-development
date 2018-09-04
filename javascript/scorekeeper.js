var p1score = document.querySelector("#p1score");
var p2score = document.querySelector("#p2score");
var playingtill = document.querySelector("#playingtill");
var p1button = document.querySelector("#p1but");
var p2button = document.querySelector("#p2but");
var reset = document.querySelector("#reset");
/*alert(p1score.textContent);
alert(p2score.textContent);
*/
p1score.textContent = 1;
playingtill.textContent = String(Number(playingtill.textContent)+5);

p1button.addEventListener("click",function(){
	p1score.textContent = String(Number(p1score.textContent)+1);
});

p2button.addEventListener("click",function(){
	p2score.textContent = String(Number(p2score.textContent)+1);
});

reset.addEventListener("click",function(){

	p1score.textContent = '0';
	p2score.textContent = '0';
});
//p1score.innerHTML = "<span>1</span> to <span>5</span>";
