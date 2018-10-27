import { Factory, faker } from 'ember-cli-mirage';
import moment from 'moment';

export default Factory.extend({
  id(i) {
    return i;
  },
  slug() {
    return faker.lorem.words(2).replace(' ', '-')
  },
  title() {
    return faker.lorem.sentence();
  },
  lead() {
    return faker.lorem.sentences(2)
  },
  body() {
    return faker.lorem.paragraphs(10)
  },
  created_at(i) {
    return moment().subtract(i + 1, 'days')
  },
  updated_at(i) {
    return moment().subtract(i, 'days')
  }
});
