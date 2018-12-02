Array.prototype.random = function(){
	return this[Math.floor(Math.random()*this.length)];
}

function redditAnything(){
	return 'https://reddit.com/r/random/random';
}

function wikimediaAnything(){
	return 'https://en.wikipedia.org/wiki/Special:Random';
}

function anythingClick(){
	var items = [redditAnything, wikimediaAnything];
	window.open(items.random()(),'_blank');
}

function bodyLoad(){
	document.getElementById('anything').addEventListener('click',anythingClick);
}