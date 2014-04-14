creation
createBlogTemplate
	blogTemplate := MRTemplate new.
	blogTemplate
		title: 'default';
		contents: '<html><body><h1 class="marina-blog">{{{title}}}</h1><div class="marina-blog-posts">{{{posts}}}</div></body></html>';
		save.
	^ blogTemplate