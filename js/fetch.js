fetch("https://ajith-holy-bible.p.rapidapi.com/GetVerses?Book=Luke&chapter=1&VerseFrom=5&VerseTo=8", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
		"x-rapidapi-key": "e2fab55c7cmsh15ded68d2a35c2bp1f1b6ajsne09ff8fa152e"
	}
})
.then(response => {
	return response.json();
})
.then(console.log(json))
.catch(err => {
	console.error(err);
});
