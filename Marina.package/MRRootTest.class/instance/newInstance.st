instance creation
newInstance
	super newInstance.
	object
		add:
			(MRUser new
				email: 'someone@company.com';
				fullName: 'Someone';
				yourself).
	^ object