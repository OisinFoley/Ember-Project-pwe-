import Ember from 'ember';

export default Ember.Component.extend({

	firstName: 'Oisin',
	lastName: 'Foley',
	actions:{
		press(val){
			// alert('hello ' + val);
			alert('herrro ' + val);
			// alert('herrro %s', val);
			// console.log("hihihihi :: " + val);

		}
	}
});
