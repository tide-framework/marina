tests
testFindPage
	| page root pageTitle |
	pageTitle := 'With a space'.
	page := MRPage new
		title: pageTitle;
		yourself.
	root := MRRoot new
		add: page;
		yourself.
	self assert: (root findPageForPath: {pageTitle}) equals: page