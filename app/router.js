import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('papers', { path:'my_papers '});
  this.route('staplers', { path:'my_staplers '});
  // this.route('books', { path:'books'});
  // the follwoing handles an invalid route entered into the browser
  this.route('page-not-found', {path:'/*wildcard'});
});

export default Router;
