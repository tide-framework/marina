creation
createRoot
	MRRoot setup.
	root := MRRoot default.
	root initialize.
	root add: self indexPage.
	root add: self adminUser.
	root add: self defaultTemplate.
	root save.
	^ root