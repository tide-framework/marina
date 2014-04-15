helpers
newPost
	| blog post |
	blog := self newBlog.
	post := MRBlogPost new
		contents: '';
		title: 'new post';
		published: true;
		yourself.
	blog add: post.
	^ post