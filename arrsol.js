function rev(arr)
{
	for(var i=arr.length-1;i>=0;i--)
	{
		console.log(arr[i]);
	}
}

function isUniform(arr)
{
	var ans = false;
	for(var i=1;i<arr.length;i++)
	{
		if(arr[i]!==arr[i-1])return false; 
	}
	return true;
}

function sum(arr)
{
	var ans = 0;
	for(var i=0;i<arr.length;i++)
	{
		ans +=arr[i];
	}
	console.log(ans);
}

function maxele(arr)
{
	var maxelement = arr[0];
	for(var i =1;i<arr.length;i++)
	{
		if(arr[i]>maxelement)maxelement=arr[i];
	}
	console.log(maxelement);
}
var arr1 = [1,2,3,4];
var arr2 = [1,1,1,1];
rev(arr1);
console.log(isUniform(arr1));
console.log(isUniform(arr2));
sum(arr1);
maxele(arr1);
