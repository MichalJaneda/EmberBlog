import { module, test } from 'qunit'
import { visit } from '@ember/test-helpers'
import { setupApplicationTest } from 'ember-qunit'
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage'

module('Acceptance | visits single post', function(hooks) {
  setupApplicationTest(hooks)
  setupMirage(hooks)

  test('should show post content', async function(assert) {
    const post = this.server.create('post')

    await visit(`/posts/${post.slug}`)

    assert.equal(this.element.querySelector('article h2').textContent, post.attrs.title)
    assert.equal(this.element.querySelector('article h3').textContent, post.attrs.lead)
    assert.equal(this.element.querySelector('article p').textContent, post.attrs.body)
  })
})
