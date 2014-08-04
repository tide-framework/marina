creation
createRoot
	MRRoot setup.
	root := MRRoot default.
	root initialize.
	root save.
	root add: self adminUser.
	root add: self indexPage.
	root add: self defaultTemplate.
	root add: self blogTemplate.
	root add: self blog.
	root add: self docDirectory.
	root save.
	root structures do: #save.
	root templates do: #save.
	root users do: #save.
	
	
	^ root