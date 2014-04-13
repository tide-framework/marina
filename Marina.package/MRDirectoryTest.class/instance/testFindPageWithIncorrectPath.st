tests
testFindPageWithIncorrectPath
	| page pageTitle |
	pageTitle := 'foobar'.
	page := MRPage new
		title: pageTitle;
		yourself.
	object add: page.
	self assert: ({pageTitle . pageTitle} asMRPath findFrom: object) isNil