var db = [
	{
		name:"Harry Potter",
		hasWatched:true,
		rating:5
	},
	{
		name:"Southpaw",
		hasWatched:true,
		rating:5
	},
	{
		name:"Wonder Woman",
		hasWatched:false,
		rating:4
	},
	{
		name:"Avengers",
		hasWatched:true,
		rating:5
	}
]

function print(db){
	for(var i=0;i<db.length;i++)
	{
		if(db[i].hasWatched)
		console.log("You have "+"watched "+db[i].name+" - "+db[i].rating+" stars");
		else if(!db[i].hasWatched)
		console.log("You have "+"not watched "+db[i].name+" - "+db[i].rating+" stars");
	}
}	

print(db);
