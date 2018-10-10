import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | visits posts', function(hooks) {
  setupApplicationTest(hooks);

  test('should list newest posts', async function(assert) {
    await visit('/posts');
    assert.equal(this.element.querySelectorAll('article').length, 3);
  });
});
