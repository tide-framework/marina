tests
testFindIndexPage
	| page pageTitle |
	pageTitle := 'index'.
	page := MRPage new
		title: pageTitle;
		contents: 'foobar';
		yourself.
	object add: page.
	self assert: ({} asMRPath findFrom: object) webContents equals: page webContents