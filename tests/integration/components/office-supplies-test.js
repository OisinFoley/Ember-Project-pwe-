import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('office-supplies', 'Integration | Component | office supplies', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{office-supplies}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#office-supplies}}
      template block text
    {{/office-supplies}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
