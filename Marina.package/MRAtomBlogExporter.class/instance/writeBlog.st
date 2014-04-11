writing
writeBlog
	writer xml.
	writer tag
		name: 'feed';
		xmlns: 'http://www.w3.org/2005/Atom';
		with: [ 
					self
						writeTitle: blog;
						writeBlogLinks;
						writeId: blog;
						writeUpdateDate: blog.
					blog posts do: [ :post | self writeBlogPost: post ] ]