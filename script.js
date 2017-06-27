var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		image: 'harrypotter.jpeg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		image: 'krollew.jpeg'
	},
	{
		id: 3,
		title: 'Wonderwoman',
		desc: 'Film o superbohaterce',
		image: 'wonderwoman.jpeg'
	},
	{
		id: 4,
		title: 'Iluzjonista',
		desc: 'Film o iluzjoniście',
		image: 'iluzjonista.jpeg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.image})
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));