creation
createBlog
	blog := MRBlog new.
	blog title: 'Yet another blog'.
	blog add: self blogPost1.
	blog save.
	^ blog