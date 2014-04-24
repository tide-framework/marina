tests
testFindPageWithSpacesInTitle
	| page directory pagePath directoryPath |
	page := MRPage new
		title: 'With a space';
		yourself.
	directory := MRDirectory new
		title: 'With more spaces';
		add: page;
		yourself.
	pagePath := page localPath.
	directoryPath := directory localPath.
	object add: directory.
	self
		assert:
			({directoryPath.
					pagePath} asMRPath findFrom: object)
		equals: page