instance creation
newParent
	^ MRRoot new
		add: (MRUser new
			email: 'foo@company.com';
			fullName: 'Foo Bar';
			yourself);
		yourself