function kToS(str)
{
	var key="";
	for(i=0;i<str.length;i++)
	{
		if(str[i]=='-')
		{
			key+='_';
		}
		
		else key+=str[i];
	}
	
	return key;
}

str = alert(kToS("dogs-are-awesome"));

