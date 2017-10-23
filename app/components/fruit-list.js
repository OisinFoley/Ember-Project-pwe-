import Ember from 'ember';

export default Ember.Component.extend({

	//by default, this will be contained wihtin a div.
	//let's specify a tag and classname, then check the outpout in the console
	tagName: 'span',
	classNames: ['Oisin', 'John'],

	//better approach as it follows ember lifecycle
	init(){		
		//because we're overriding the init lifecycle of this compnent, we must include this this._super assignment or 
		//else nothing will load --> gives us an "assertion error"
		this._super(...arguments); 
		// this.arrayOfFruit = ['apple','banana','orange'];	
		//let's say we want to pass the array values when we define our compnent template. 
		//to do that, we switch the above this.arrayOfFruit to::
		this.arrayOfFruit = Ember.String.w(this.attrs.fruit);
		//declaring a space delimited string of values in our compnent template will work the same as .split()

	},
	//arrayOfFruit:['apple','banana','orange'],
	actions:{
		add(val){
			//example of convention over configuration, have to use et or set in order to use 'this'
			//and we can't use traditional .push()
			this.get('arrayOfFruit').pushObject(val);
		}
	}
});
