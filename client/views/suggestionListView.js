//Use subscribe here instead!
Meteor.subscribe("items");

Template.suggestionListView.helpers({
	items: function() {
		console.log(Session.get("items"));
		return Session.get("items");
	}
});

Template.suggestionListView.onCreated(function(){
	Meteor.call('getItems', function(err, itemList){
		Session.set("items", itemList);
	});
});

// Template.suggestionListView.events ( {
// 	'mouseenter .flex-item': function(event) {
// 		console.log("HIHIH");
// 		$('.flex-item:hover').css({cursor: pointer})
// 	},

// 	'mouseleave .flex-item': function(event) {
// 		console.log("HIHIH");
// 	}
// });