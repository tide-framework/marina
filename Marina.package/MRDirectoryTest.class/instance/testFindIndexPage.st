tests
testFindIndexPage
	| page pageTitle |
	pageTitle := 'index'.
	page := MRPage new
		title: pageTitle;
		yourself.
	object add: page.
	self assert: ({} asMRPath findPageFrom: object) equals: page