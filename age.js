var age = Number(prompt("Please enter your age:"));

if(age<0)
{
	console.log("You entered an invalid input");
}

if(age==21)
{
	console.log("Happy 21st birthday");
}

if(age%2==1)
{
	console.log("Your age is odd");
}

var check;
for(var i = 1;i*i<=age;i++)
{

	if(i*i===age)
	{
		check = i;	
	}
}

if(check%1==0)
{
	console.log("Age is a perfect square");	
}
