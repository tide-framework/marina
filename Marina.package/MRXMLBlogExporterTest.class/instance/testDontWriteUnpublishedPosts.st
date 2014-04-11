tests
testDontWriteUnpublishedPosts
	| title post |
	title := 'The Title'.
	post := self newPost published: false; title: title.
	object writeBlogPost: post.
	self assertXMLEquals: ''.
	post published: true.
	object writeBlogPost: post.
	self assertXMLIncludes: title