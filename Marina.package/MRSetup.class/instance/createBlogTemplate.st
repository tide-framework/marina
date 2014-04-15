creation
createBlogTemplate
	blogTemplate := MRTemplate new.
	blogTemplate
		title: 'blog template';
		contents: '<html><body><h1 class="marina-blog">{{{title}}}</h1><div class="marina-blog-posts">{{{contents}}}</div></body></html>';
		save.
	^ blogTemplate