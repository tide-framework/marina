accessing
blogTemplate
	^ blogTemplate ifNil: [ blogTemplate := self createBlogTemplate ]