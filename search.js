

// Search for a specified string.
function search() {
  var keyword = document.getElementById('query').value;
 
  
  var req = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB7VkFIbTYbzvFfDV8A7eiMWdKQVSeQ3b0&type=video&part=snippet&maxResults=15&q='+keyword;
  

 
 var json= fetch(req).then(function(response) {
  return response.json();
}).then(function(data) {
	
	for(let i=0;i<15;i++){
  console.log(data.items[i].snippet.title);
  console.log(data.items[i].snippet.description);
  console.log(data.items[i].snippet.thumbnails.high.url);
  var x = document.getElementById("img"+i);
    x.setAttribute("src", data.items[i].snippet.thumbnails.high.url);
    x.setAttribute("alt", "The Pulpit Rock");
    
	console.log(x);
	var para = document.createElement("p");
	
	
var  description = document.createTextNode(data.items[i].snippet.description);
var  author = document.createTextNode(data.items[i].snippet.channelTitle);
var published_date = document.createTextNode(data.items[i].snippet.publishedAt);
var count_views = document.createTextNode(data.items[i].snippet.title);
	
var node = document.createTextNode(data.items[i].snippet.title);
para.appendChild(node);
var element = document.getElementById("title"+i);
element.appendChild(para);
	}
	
	/*video is title with link on youtube,
preview
description
author
published date
count of views*/
	
}).catch(function() {
  console.log("error");
});


}
