tests
testFindPageWithDuplicatedTitles
	| pageTitle pageInSubDir pageAtRoot directory directoryTitle |
	pageTitle := 'With a space'.
	pageInSubDir := MRPage new
		title: pageTitle;
		yourself.
	pageAtRoot := pageInSubDir copy.
	directoryTitle := 'a directory'.
	directory := MRDirectory new
		title: directoryTitle;
		add: pageInSubDir;
		yourself.
	object
		add: pageAtRoot;
		add: directory.
	self deny: pageAtRoot == pageInSubDir.
	self assert: (object findPageForPath: {pageTitle}) == pageAtRoot.
	self
		assert:
			(object
				findPageForPath:
					{directoryTitle.
					pageTitle}) == pageInSubDir