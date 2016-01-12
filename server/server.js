
	Meteor.publish('Hackers', function() {
		return Hackers.find({userId: this.userId});
	});

Hackers.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return false;
	}


})