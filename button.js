var offset = "comic: http://xkcd.com/".length;

var comic = document.getElementById("middleContainer").innerHTML;
comic = comic.slice(comic.indexOf("comic: ") + offset);
comic = comic.split("/",1)[0];

var url = "http://www.explainxkcd.com/wiki/index.php/" + comic;
var button = "<li><a href=\"" + url + "\">Explain</a></li>";
var NAV = document.getElementsByClassName("comicNav");
for(var i = 0; i < NAV.length; i++){
	NAV[i].innerHTML+=button;
}//for
