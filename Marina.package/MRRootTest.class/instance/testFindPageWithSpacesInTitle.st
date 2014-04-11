tests
testFindPageWithSpacesInTitle
	| page directory root pageTitle directoryTitle |
	pageTitle := 'With a space'.
	page := MRPage new
		title: pageTitle;
		yourself.
	directoryTitle := 'With more spaces'.
	directory := MRDirectory new
		title: directoryTitle;
		add: page;
		yourself.
	root := MRRoot new add: directory; yourself.
	self assert: (root findPageForPath: { directoryTitle . pageTitle }) equals: page