Meteor.subscribe('Hackers');

Template.hackerProfile.helpers({
	hackerProfile: function() {
		let hacker = Hackers.findOne({"userId": Meteor.userId() });

		let legalName = hacker && hacker.legalName || '';
		let pseudo = hacker && hacker.pseudo || '';
		let bestHack = hacker && hacker.bestHack || '';

		return { "name": name, "pseudo": pseudo, "bestHack": bestHack };
	}
});

Template.hackerProfile.events = {
	'click #addProfile' : function(event,template) {
	console.log('Submit Form')
	let legalName = template.find('#name').value;
	let pseudo = template.find('#pseudo').value;
	let email = template.find('#email').value;
	let bestHack = template.find('#bestHack').value; 
	let newUser = {
		name:name,
		pseudo:pseudo,
		email:email,
		bestHack:bestHack
	};

	Hackers.insert(newUser);
}
}