(function () {
angular.module('homeModule',[])
.factory('MainTitle',[function (){
	return {
		title:"Sid Barret"
	}
}])

.config([function (){
	console.log("Home module:: config");
}]).run([function (){
	console.log("Home module :: running")
}]).controller('HomeCtrl', ['$scope','MainTitle',function ($scope,mainTitle) {
	this.title = mainTitle.title+" Kethireddy";
	this.menu=[
		{
			name:"Home",
			href:"index.html"
		},{
			name:"Events",
			href:"events.html"
		},
		{
			name:"Photos",
			href:"photos.html"
		},{
			name:"Music",
			href:"music.html"
		},{
			name:"Art",
			href:"art.html"
		},
		{
			name:"Sign Up",
			href:"signup.html"
		},{
			name:"Contact",
			href:"contact.html"
		}
	]

this.index = 0;

	this.setIndex=function(val)
	{
		this.index = val;
		
	}

	this.getIndex=function(){
		return(this.index);
	}
}])
.controller('HomeItemCtrl', ['$scope','MainTitle', function ($scope,mainTitle) {
	this.itemTitle="WELCOME";
	this.description="Thanks for visiting the official "+mainTitle.title+" Website. One of the most influential musicians in Indian pop history, he was as appreciated as much for his iconoclastic approach to the electric guitar as for his adventurous and imaginative songwriting.";
	this.description1="A co-founder of White Rabbit , he was also quintessentially English, penning idiosyncratic and unique songs, while, along with Ray Davies, was probably responsible for a whole generation of musicians feeling that it was acceptable not to be American and to develop their own indigenous band of rock music.";
	this.imgSrc ="assets/img/home_left_syd.jpg";
	
}])
.controller('HomeTabCtrl', ['$scope', function ($scope) {
	this.tab = 0;
	console.log("yes")
	this.setTab=function(val)
	{
		this.tab = val;
	}
	this.getTab=function(val)
	{
		return(this.tab);
	}
	
}])


})();