import DS from 'ember-data';

// DS -> data store

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  year: DS.attr('date')
});
