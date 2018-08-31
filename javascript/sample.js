var a = Number(prompt("Please enter a number"));

function aux(a)
{
	alert(a);
	a=1;
	console.log(a);
}

aux(a);
console.log(a);

var arr = [1,2,3];

arr.push(10);
arr.unshift(20);
for(i=0;i<arr.length;i++)console.log(arr[i]);


