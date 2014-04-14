accessing
defaultIndexPage
	| page |
	page := MRPage new.
	page title: 'index'.
	page contents: self contentsForDefaultIndexPage.
	page published: true.
	page parent: self.
	^ page