tests
testWriteShortSummary
	| content exporterLimit blogPost |
	exporterLimit := object summarySizeLimit.
	content := 'abc'.
	blogPost := MRBlogPost new title: 'foo'; contents: content; yourself.
	self assert: content size < exporterLimit.
	self assert: (object summaryOfBlogPost: blogPost) equals: 'abc'.
	