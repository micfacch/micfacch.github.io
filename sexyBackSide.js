
$.getJSON("https://spreadsheets.google.com/feeds/list/0AoLdGMoMdD39dFVyWTItb2ZPQkZMNlVDcm85VVBfUkE/od6/public/values?alt=json", 
	function(data) {
  //first row "title" column
  console.log(data.feed.entry[0]['gsx$title']['$t']);
});
