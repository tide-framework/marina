tests
testFindPageWithIncorrectPath
	| page pageTitle |
	pageTitle := 'foobar'.
	page := MRPage new
		title: pageTitle;
		yourself.
	object add: page.
	self assert: (object findPageForPath: {pageTitle . pageTitle}) isNil