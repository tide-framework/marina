tests
testFindPageWithSpacesInTitle
	| page directory pageTitle directoryTitle |
	pageTitle := 'With a space'.
	page := MRPage new
		title: pageTitle;
		yourself.
	directoryTitle := 'With more spaces'.
	directory := MRDirectory new
		title: directoryTitle;
		add: page;
		yourself.
	object add: directory.
	self
		assert:
			(object
				findPageForPath:
					{directoryTitle.
					pageTitle})
		equals: page