import Route from '@ember/routing/route';
import 'moment';

export default Route.extend({
  model() {
    return [
      {
        id: 3,
        slug: 'newest-post-on-blog',
        title: 'Newest post on blog',
        lead: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
        created_at: moment(),
        updated_at: moment()
      },
      {
        id: 2,
        slug: 'second-post-on-blog',
        title: 'Second post on blog',
        lead: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
        created_at: moment(),
        updated_at: moment()
      },
      {
        id: 1,
        slug: 'first-post-on-blog',
        title: 'First post on blog',
        lead: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
        created_at: moment().subtract(10, 'days'),
        updated_at: moment()
      }
    ];
  }
});
