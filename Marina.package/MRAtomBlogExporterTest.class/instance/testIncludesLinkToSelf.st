tests
testIncludesLinkToSelf
	| selfURL |
	selfURL := 'http://foo.com/bar/feed.xml' asUrl.
	object publicationLocation: selfURL.
	object blog: self newBlog; writeBlog.
	self assertXMLIncludes: '<link rel="self" type="application/atom+xml" href="' , selfURL printString , '"'