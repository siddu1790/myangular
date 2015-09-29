(function () {
angular.module('eventModule',[])
.factory('MainTitle',[function (){
	return {
		title:"Sid Barret"
	};
}])
.filter('searchCity', function() {
  return function(items,search) {
    var filtered = [];
    if(!search){return items;}
    angular.forEach(items, function(item) {

    	if(angular.uppercase(item.title).indexOf(angular.uppercase(search))!=-1)
    	{
    		filtered.push(item);
    	}
      
    });
   return filtered;
  };
})
.config([function (){
	console.log("event module:: config");
}]).run([function (){
	console.log("event module :: running")
}])
.controller('EventItemCtrl', ['$scope','MainTitle', function ($scope,mainTitle) {
	this.itemTitle=mainTitle.title+" Concert Event at Seattle";
	this.description=mainTitle.title+" the erratically brilliant songwriter and singer who created the psychedelic rock of White Rabbit";
	this.imgSrc ="assets/img/seattle1.jpg";	
}])
.controller('EventTabCtrl', ['$scope', function ($scope) {
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
.controller('EventCtrl',['$scope','MainTitle',function($scope,mainTitle) {
	this.events=[
	{
		title : "Chicago",
		imgName:"chicago1",
		date :Date.parse("October 24 2015")
	},
	{
		title: "Kansas City",
		imgName:"kansascity1",
		date:Date.parse("January 24 2016")
	},
	{
		title: "Oregon",
		imgName:"oregon1",
		date:Date.parse("April 24 2016")
	},
	{
		title : "New York",
		imgName:"NYC1",
		date:Date.parse("February 24 2016")
	},
	{
		title : "Wisconsin",
		imgName:"wisconsin1",
		date:Date.parse("April 24 2016")
	},{
		title : "New Mexico",
		imgName:"newmexico1",
		date:Date.parse("December 24 2016")
	},{
		title : "San Francisco",
		imgName:"sf1",
		date:Date.parse("November 24 2016")
	},{
		title : "Indianapolis",
		imgName:"indiana1",
		date:Date.parse("July 24 2016")
	}
	]
}])
.directive('eventItem', function () {
 return {
 	restrict : 'E',
 	templateUrl:'app/event/eventItem.html',
 	controller:function($scope){
 		console.log("do stuff")
 	},
 	link: function($scope,element,attrs){}
 }


});

})();