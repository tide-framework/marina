tests
testFindPageWithDuplicatedTitles
	| pagePath pageInSubDir pageAtRoot directory directoryPath |
	pageInSubDir := MRPage new
		title: 'With a space'
		yourself.
	pagePath := pageInSubDir localPath.
 	pageAtRoot := pageInSubDir copy.
	directory := MRDirectory new
		title: 'a directory';
		add: pageInSubDir;
		yourself.
	directoryPath := directory localPath.
	object
		add: pageAtRoot;
		add: directory.
	self deny: pageAtRoot == pageInSubDir.
	self assert: ({pagePath} asMRPath findFrom: object) == pageAtRoot.
	self
		assert:
			({directoryPath.
					pagePath} asMRPath findFrom: object) == pageInSubDir