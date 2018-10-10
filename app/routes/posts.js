import Route from '@ember/routing/route';
import 'moment';

export default Route.extend({
  model() {
    return this.store.findAll('post');
  }
});
