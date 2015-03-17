Router.route('/', function () {
	this.render('LandingPage', {data: {title: 'My Title'}});
});

Router.map( function () {
  this.route('Home');
});

Router.route('/AddQuestion', function () {
	this.render('AddQuestion');
});

Router.route('/RunMemorizit', function () {
	this.render('RunMemorizit');
});

Router.route('/ListQuestion', function () {
	this.render('ListQuestion');
});