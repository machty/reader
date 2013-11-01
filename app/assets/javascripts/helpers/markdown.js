Ember.Handlebars.helper('markdown', function(code) {

	var converter = new Showdown.converter();

	return converter.makeHtml(code).htmlSafe();
	// .html_safe
});