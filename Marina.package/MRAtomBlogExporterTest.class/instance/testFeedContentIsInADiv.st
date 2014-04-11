tests
testFeedContentIsInADiv
	| post |
	post := self newPost.
	object writeBlogPost: post.
	self assertXMLIncludes: '<div xmlns="'