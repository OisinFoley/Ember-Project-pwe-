import Ember from 'ember';

export default Ember.Component.extend({

	number:100,
	click(){
		// this.sendAction();
		// now the click acts just like a function which we can call, and just seems cleaner, while being better 
		//practice according to some googling

		//pressed is coming from the controller(named application.js)
		//it's then fed into the main application.hbs file on the client
		this.attrs.pressed();
	}
});
