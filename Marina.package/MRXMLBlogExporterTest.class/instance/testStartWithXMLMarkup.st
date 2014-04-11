tests
testStartWithXMLMarkup
	| blog |
	blog := self newBlog.
	object blog: blog.
	object writeBlog.
	self assertXMLIncludes: '<?xml version'