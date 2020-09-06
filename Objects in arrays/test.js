let user = {
	name: 'Crystal',
	age: 30,
	email: 'Crystal@thenetninja.co.uk',
	location: 'Berlin',
	blogs : [
	{title: 'Why mac and cheese rules', likes : 30, tags : 'mac, cheese, breakfast'},
	{title: '10 things to make with marmite', likes : 24, tags : 'mermite, food, recipe'},
],

	login(){
		console.log('User logged in!');
	},
	logout(){
		console.log('User logged out!');
	},
	logBlogs(){
		let user = this.name;
		console.log( `This user : '${user}' has written following blogs : `);
		this.blogs.forEach((blog,index) => {
			console.log(`${index}. ${blog.title}, likes: ${blog.likes}, tags: ${blog.tags}`)
		});
	}
};

user.logBlogs();