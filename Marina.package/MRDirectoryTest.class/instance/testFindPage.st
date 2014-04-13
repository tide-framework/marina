tests
testFindPage
	| page pageTitle |
	pageTitle := 'With a space'.
	page := MRPage new
		title: pageTitle;
		yourself.
	object add: page.
	self assert: ({pageTitle} asMRPath findFrom: object) equals: page