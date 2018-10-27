import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.query('post', {
      slug: params.slug
    }).then((posts) => {
      return posts.get("firstObject")
    })
  }
})
