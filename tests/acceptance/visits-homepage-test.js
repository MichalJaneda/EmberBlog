import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | visits homepage', function(hooks) {
  setupApplicationTest(hooks);

  test('should see navbar home link as active', async function (assert) {
    await visit('/');
    assert.equal(this.element.querySelector('.navbar .nav-link.active').textContent, 'Home');
  });

  test('should show newest posts', async function (assert) {
  });

  test('should show at least one promoted post', async function (assert) {
  });

  test('should show navbar', async function (assert) {
  });

  test('should show side categories', async function (assert) {
  });

  test('should show some products', async function (assert) {
  });
});
