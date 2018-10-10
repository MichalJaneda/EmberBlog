import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | visits posts', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should list newest posts', async function(assert) {
    const posts = this.server.createList('post', 2);

    await visit('/posts');

    assert.equal(this.element.querySelectorAll('article').length, posts.length);
  });
});
