import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr(),
  title: DS.attr(),
  lead: DS.attr(),
  body: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr()
});
