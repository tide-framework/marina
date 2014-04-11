tests
testFindIndexPage
	| page pageTitle |
	pageTitle := 'index'.
	page := MRPage new
		title: pageTitle;
		yourself.
	object add: page.
	self assert: (object findPageForPath: {}) equals: page