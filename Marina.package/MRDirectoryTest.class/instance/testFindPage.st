tests
testFindPage
	| page pageTitle |
	pageTitle := 'With a space'.
	page := MRPage new
		title: pageTitle;
		yourself.
	object add: page.
	self assert: (object findPageForPath: {pageTitle}) equals: page