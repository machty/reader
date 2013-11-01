// for more details see: http://emberjs.com/guides/models/defining-models/

Reader.Article = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  body: DS.attr('string')
});
