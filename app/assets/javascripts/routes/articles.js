Reader.ArticlesRoute = Ember.Route.extend({
	model: function() {

		return $.getJSON('/articles.json');

		/*
		return [
			{
				title: "Hello",
				author: "YOLO",
				body: "some words"
			},
			{
				title: "Hello2",
				author: "YOLO2",
				body: "some words2"
			}
		];
		*/
	}
});