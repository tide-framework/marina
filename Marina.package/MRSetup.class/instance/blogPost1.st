accessing
blogPost1
	^ blogPost1 ifNil: [ blogPost1 := self createBlogPost1 ]