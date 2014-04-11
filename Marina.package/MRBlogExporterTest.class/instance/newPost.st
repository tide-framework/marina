helpers
newPost
	^ MRBlogPost new
		contents: '';
		published: true;
		yourself