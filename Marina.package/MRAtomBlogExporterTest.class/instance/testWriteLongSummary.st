tests
testWriteLongSummary
	| content exporterLimit blogPost exportedContent |
	exporterLimit := object summarySizeLimit.
	content := String streamContents: [ :stream | exporterLimit + 100 timesRepeat: [  stream nextPut: $a ]].
	blogPost := MRBlogPost new title: 'foo'; contents: content; yourself.
	self assert: content size > exporterLimit.
	exportedContent := (object summaryOfBlogPost: blogPost).
	self assert: exportedContent size equals: exporterLimit.
	self assert: (exportedContent allSatisfy: [:char | char = $a]).
	