helpers
newBlog
	| root blog |
	root := self newRoot.
	blog := MRBlog new title: 'blog'; yourself.
	root add: blog.
	^ blog