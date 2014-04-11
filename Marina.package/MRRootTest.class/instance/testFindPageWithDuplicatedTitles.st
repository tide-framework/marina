tests
testFindPageWithDuplicatedTitles
	| root pageTitle pageInSubDir pageAtRoot directory directoryTitle |
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
	root := MRRoot new
		add: pageAtRoot;
		add: directory;
		yourself.
	self deny: pageAtRoot == pageInSubDir.
	self assert: (root findPageForPath: {pageTitle}) == pageAtRoot.
	self
		assert:
			(root
				findPageForPath:
					{directoryTitle.
					pageTitle}) == pageInSubDir