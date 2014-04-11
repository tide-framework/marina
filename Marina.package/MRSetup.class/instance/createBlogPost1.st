creation
createBlogPost1
	blogPost1 := MRBlogPost new.
	blogPost1 title: 'My first post'.
	blogPost1 contents: 'This is my first post. In this blog I may talk about *Marina>https://github.com/tide-framework/marina* and I will surely talk about *Emacs>http://www.emacswiki.org/emacs*.'.
	blogPost1 published: true.
	blogPost1 author: self adminUser.
	blogPost1 save.
	^ blogPost1
	