creation
createBlog
	blog := MRBlog new.
	blog
		title: 'Yet another blog';
		add: self blogPost1;
		indexTemplate: self blogTemplate;
		save.
	^ blog