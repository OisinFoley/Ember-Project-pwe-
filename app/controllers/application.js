import Ember from 'ember';

export default Ember.Controller.extend({
	// actions is a conventipn over configuration
	// giving a different name - say tasks - here followed by using task in the application.hbs won't wire up the function call
	// as it is now
	actions:{
		pressed(){
			alert("you pressed alert!");
		}
	}
});
